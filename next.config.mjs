// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Correct the basePath to match your repo name exactly
  basePath: '/tic-tac-toe', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
