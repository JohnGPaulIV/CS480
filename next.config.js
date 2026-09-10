/** @type {import('next').NextConfig} */
const basePath = "/CS480"; // <-- your repo name, with a leading slash

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    // Public assets (anything referenced from /public) are NOT rewritten
    // automatically by basePath/assetPrefix, so components import this
    // and prepend it by hand.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
