import useSWR from "swr";

export interface Repository {
  name: string
  description: string
  svn_url: string
  homepage?: string
  thumbnail?: string
  skills?: string[]
}

interface GitHubApiResponse {
  name: string
  description: string
  svn_url: string
  homepage?: string
  topics: string[]
}

interface Response {
  data?: Repository[]
  error?: Error
  isLoading: boolean
}

const sort = (repositories: Repository[]) => {
  const sorted = repositories.sort((a: any, b: any) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) return -1
    if (a.name.toUpperCase() < b.name.toUpperCase()) return 1
    return 0;
  })
  // ポートフォリオのリポジトリは先頭に表示する
  const index = sorted.findIndex(repo => repo.name === "portfolio");
  const portfolio = sorted[index];
  const filtered = sorted.filter(repo => repo.name !== "portfolio");
  filtered.unshift(portfolio);
  return filtered;
}

const repositoryFetcher = async (url: string) => {
  const data = await fetch(url).then(r => r.json());
  const repositories = data.items.map((item: GitHubApiResponse): Repository => {
    return {
      name: item.name,
      description:  item.description,
      svn_url: item.svn_url,
      homepage: item.homepage,
      skills: item.topics.filter(topic => topic !== "portfolio") // portfolio以外の使用スキルタグを表示
    }
  });
  return repositories;
}
const thumbnailFetcher = async (url: string, repositories: Repository[]) => {
  if (!repositories) {
    return;
  }
  const thumbnails = await Promise.all(repositories.map(async repo => {
    const BRANCHES_URL = `https://api.github.com/repos/nkwtnb/${repo.name}/branches`;
    const branches = await fetch(BRANCHES_URL).then(r => r.json());
    const hasImages = branches.some((branch: any) => branch.name === "images");
    if (!hasImages) return repo;
    const URL = `https://api.github.com/repos/nkwtnb/${repo.name}/contents/thumbnail.png?ref=images`;
    const resp = await fetch(URL).then(r => r.json());
    repo.thumbnail = "data:image/png;base64," + resp.content;
    return repo;
  }));

  return thumbnails;
}

const makeResponse = (data?: Repository[], error?: Error): Response => {
  return {
    data: data,
    error: error,
    isLoading: !error && !data
  }
}

export const useProductFetcher = (): Response => {
  const URL = "https://api.github.com/search/repositories?q=user:nkwtnb+topic:portfolio";
  const {data: repositories, error: errorOnRepository} = useSWR(URL, repositoryFetcher);

 const {data: thumbnails, error: errorOnThumbnail} = useSWR([URL, repositories], thumbnailFetcher);
  if (errorOnThumbnail) return makeResponse(undefined, errorOnThumbnail);
  if (!thumbnails) return makeResponse(undefined, undefined);
  const sorted = sort(thumbnails); 
  return {
    data: sorted,
    error: errorOnThumbnail,
    isLoading: !sorted && !errorOnThumbnail
  }
}