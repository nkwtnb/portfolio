import useSWR from "swr";
import kron_thumbnail from "../resources/images/kron.nw-apps.jp_lp.png"

export interface Repository {
  name: string
  description: string
  svn_url?: string
  homepage?: string
  thumbnail?: string
  skills?: string[]
  isPrivate?: boolean
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
  return repositories
  // const sorted = repositories.sort((a: any, b: any) => {
  //   if (a.name.toUpperCase() > b.name.toUpperCase()) return -1
  //   if (a.name.toUpperCase() < b.name.toUpperCase()) return 1
  //   return 0;
  // })
  // // ポートフォリオのリポジトリは先頭に表示する
  // const index = sorted.findIndex(repo => repo.name === "portfolio");
  // const portfolio = sorted[index];
  // const filtered = sorted.filter(repo => repo.name !== "portfolio");
  // filtered.unshift(portfolio);
  // return filtered;
}

// プライベートリポジトリは、APIで取得できないため、個別で記載する
const getRepositories = () => {
  const repos: Repository[] = [
    {
      name: "kron",
      description: "kintoneのレコードデータと添付ファイルを自動で毎日CSV出力するWebサービスです。",
      // homepage: "https://kron.nw-apps.jp/lp",
      skills: ["ruby", "rails", "tailwindcss", "typescript", "jest", "sendgrid", "cloudrun",],
      thumbnail: "https://raw.githubusercontent.com/nkwtnb/xlsx-creator-web/refs/heads/images/thumbnail.png",
      isPrivate: true
    }
  ]
  return repos
}

const repositoryFetcher = async (url: string) => {
  //
  const mergedRepositories = getRepositories()
  return mergedRepositories;
}
const thumbnailFetcher = async (url: string, repositories: Repository[]) => {
  console.log("repos", repositories)
  if (!repositories) {
    return;
  }
  const thumbnails = await Promise.all(repositories.map(async repo => {
    // if (repo.isPrivate) return repo
    // const BRANCHES_URL = `https://api.github.com/repos/nkwtnb/${repo.name}/branches`;
    // const branches = await fetch(BRANCHES_URL).then(r => r.json());
    // const hasImages = branches.some((branch: any) => branch.name === "images");
    // if (!hasImages) return repo;
    // const URL = `https://api.github.com/repos/nkwtnb/${repo.name}/contents/thumbnail.png?ref=images`;
    // const resp = await fetch(URL).then(r => r.json());
    // repo.thumbnail = resp.download_url;
    return repo;
  }));
  console.log("thub", thumbnails)
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
  const {data: repositories, error: errorOnRepository} = useSWR<Repository[]>(URL, repositoryFetcher);
  const {data: thumbnails, error: errorOnThumbnail} = useSWR([URL, repositories], thumbnailFetcher);
  if (errorOnThumbnail) return makeResponse(undefined, errorOnThumbnail);
  if (!thumbnails) return makeResponse(undefined, undefined);
  const sorted = sort(thumbnails); 
  console.log(sorted)
  return {
    data: sorted,
    error: errorOnThumbnail,
    isLoading: !sorted && !errorOnThumbnail
  }
}