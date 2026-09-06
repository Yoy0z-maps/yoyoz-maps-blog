/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  async redirects() {
    return [
      { source: "/apps", destination: "/apps/rovoca", permanent: false },
      ...["rovoca", "daily-english-sentence", "fine-studio"].map((slug) => ({
        source: `/${slug}/:path*`,
        destination: `/apps/${slug}/:path*`,
        permanent: true,
      })),
    ];
  },
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
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(
  nextConfig,
);
