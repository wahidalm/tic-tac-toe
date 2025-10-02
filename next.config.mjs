/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tic-tac-toe",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;