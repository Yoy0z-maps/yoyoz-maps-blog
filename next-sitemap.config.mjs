import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config({ path: ".env.production" });

const API_SERVER_ADDRESS = process.env.API_SERVER_ADDRESS;

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://yoy0z-maps.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
  },

  additionalPaths: async () => {
    const staticPaths = [{ loc: "/project" }, { loc: "/blog" }];

    try {
      const res = await fetch(`${API_SERVER_ADDRESS}/posts/`);
      const blogData = await res.json();

      const dynamicBlogPaths = blogData.results.map((post) => ({
        loc: `/blog/${post.id}`,
        lastmod: new Date(post.published_date).toISOString(),
      }));

      return [...staticPaths, ...dynamicBlogPaths];
    } catch (err) {
      console.error("❌ Failed to fetch blog posts for sitemap:", err);
      return staticPaths;
    }
  },
};

export default config;
