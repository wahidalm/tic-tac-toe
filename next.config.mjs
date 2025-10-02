// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static exports
  output: 'export',

  // Your repository name (e.g., if your repo is 'my-next-app', this should be '/my-next-app')
  basePath: '/tic-tac-toe', 

  // Disables the default Next.js image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
