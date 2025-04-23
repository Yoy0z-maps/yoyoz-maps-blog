import TipTapViewer from "@/components/blog/id/TipTapViewer";
import LoadingSpinner from "@/components/LoadingSpinner";
import NavHighlighter from "@/components/NavHighlighter";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { Post } from "@/types/post";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await fetch(`${API_SERVER_ADDRESS}/posts/${params.id}/`, {
    next: {
      revalidate: 60,
    },
  });
  const postData = await post.json();

  return {
    title: postData.title,
    description: "Yoy0z-maps의 기술/디자인 블로그입니다.",
    openGraph: {
      title: postData.title,
      images: [postData.image],
    },
    icons: {
      icon: "/assets/images/favicon.ico",
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetch(`${API_SERVER_ADDRESS}/posts/${params.id}/`, {
    next: {
      revalidate: 60,
    },
  });
  const postData = await post.json();

  if (!postData) {
    return (
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <div className="w-full h-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <>
      <NavHighlighter path="/blog" />
      <TipTapViewer post={postData as Post} />
    </>
  );
}
