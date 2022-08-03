/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/portfolio',
  basePath: '/portfolio',
}

module.exports = {
  ...nextConfig,
  env: {
    basePath: '/portfolio',
  },
}