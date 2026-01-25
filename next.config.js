/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/accessoryShop",
  basePath: "/accessoryShop",
};

module.exports = nextConfig;
