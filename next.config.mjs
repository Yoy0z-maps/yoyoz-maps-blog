/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_SERVER_ADDRESS: process.env.API_SERVER_ADDRESS,
  },
  images: {
    domains: ["my-blog-yoy0z-maps-bucket.s3.amazonaws.com"],
  },
};

export default nextConfig;
