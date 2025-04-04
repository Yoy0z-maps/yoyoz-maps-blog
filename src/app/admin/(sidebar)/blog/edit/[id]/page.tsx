import TipTapEditor from "@/components/admin/blog/TipTapEditor";
import NavHighlighter from "@/components/NavHighlighter";
import { API_SERVER_ADDRESS } from "@/constant/api_address";

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
