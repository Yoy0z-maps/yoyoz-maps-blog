/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_SERVER_ADDRESS: process.env.API_SERVER_ADDRESS,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-blog-yoy0z-maps-bucket.s3.amazonaws.com",
        pathname: "/**", // 모든 경로 허용 (필요에 따라 제한 가능)
      },
    ],
  },
};

export default nextConfig;
