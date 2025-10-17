import LoadingSpinner from "@/components/LoadingSpinner";
import NavHighlighter from "@/components/NavHighlighter";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import dynamic from "next/dynamic";

const TipTapEditor = dynamic(
  () => import("@/components/admin/blog/TipTapEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    ),
  }
);

const getPostData = async (id: string) => {
  const response = await fetch(`${API_SERVER_ADDRESS}/posts/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="w-full bg-admin-bg overflow-y-auto">
      <NavHighlighter path="/admin/blog" />
      <TipTapEditor postData={postData} />
    </div>
  );
}
