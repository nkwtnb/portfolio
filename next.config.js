/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/gh-pages-portfolio',
  basePath: '/gh-pages-portfolio',
}

module.exports = {
  ...nextConfig,
  env: {
    basePath: '/gh-pages-portfolio',
  },
}