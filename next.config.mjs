/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_SERVER_ADDRESS: process.env.API_SERVER_ADDRESS,
  },
};

export default nextConfig;
