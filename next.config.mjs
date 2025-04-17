/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_SERVER_ADDRESS: process.env.API_SERVER_ADDRESS,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yoy0z-maps-blog-bucket.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**", // 모든 경로 허용 (필요에 따라 제한 가능)
      },
    ],
  },
};

export default nextConfig;
