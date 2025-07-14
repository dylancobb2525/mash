/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // Check if it's production


const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isProd ? 'https://cdn.reachmd.com/uploads/advances-in-masld-mash/' : 'http://localhost:3000/', // Use CDN for production, localhost for dev
  env: {
    ASSET_PREFIX: isProd ? 'https://cdn.reachmd.com/uploads/advances-in-masld-mash/' : 'http://localhost:3000/', // Expose to the app via process.env.ASSET_PREFIX
  },
};

export default nextConfig;
