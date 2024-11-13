/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/portfolio',
  basePath: '/portfolio',
  output: "export",
}

module.exports = {
  ...nextConfig,
  env: {
    basePath: '/portfolio',
  },
}