import TipTapViewer from "@/components/blog/id/TipTapViewer";
import NavHighlighter from "@/components/NavHighlighter";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await fetch(`${API_SERVER_ADDRESS}/posts/${params.id}/`);
  const postData = await post.json();

  return {
    title: postData.title,
    description: "Yoy0z-maps의 기술/디자인 블로그입니다.",
    openGraph: {
      title: postData.title,
      images: [postData.image],
    },
  };
}

export default function Page() {
  return (
    <>
      <NavHighlighter path="/blog" />
      <TipTapViewer />
    </>
  );
}
