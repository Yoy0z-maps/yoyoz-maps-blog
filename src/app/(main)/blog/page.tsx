import LoadingSpinner from "@/components/LoadingSpinner";
import NavHighlighter from "@/components/NavHighlighter";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { BLOG_BUCKET } from "@/constant/blog_bucket";
import BlogLastestArticlesPanel from "@/container/blog/BlogLastestArticlesPanel";
import BlogMainPanel from "@/container/blog/BlogMainPanel";
import { Post } from "@/types/post";

const fetchBucketPosts = async () => {
  const res = await Promise.all(
    BLOG_BUCKET.map((item) =>
      fetch(`${API_SERVER_ADDRESS}/posts/${item.target}/`).then((res) =>
        res.json()
      )
    )
  );
  return res as unknown as Post[];
};

const fetchAllPosts = async () => {
  const res = await fetch(`${API_SERVER_ADDRESS}/posts`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function Page() {
  const bucket_posts = await fetchBucketPosts();
  const posts = await fetchAllPosts();

  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex flex-col w-full h-full relative transition-all duration-500 py-28 px-10`}
    >
      <NavHighlighter path="/blog" />
      {posts.length === 0 ? (
        <div className="flex items-center justify-center h-screen w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <BlogMainPanel contents={bucket_posts} />
          <BlogLastestArticlesPanel contents={posts} />
        </>
      )}
    </div>
  );
}

// 칼럼 내부 컨테이너 - 메인, Latest Article with Category&Search
