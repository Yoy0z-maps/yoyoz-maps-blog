import LoadingSpinner from "@/components/LoadingSpinner";
import NavHighlighter from "@/components/NavHighlighter";
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

export default function Page() {
  return (
    <div className="w-full bg-admin-bg overflow-y-auto">
      <NavHighlighter path="/admin/blog" />
      <TipTapEditor postData={null} />
    </div>
  );
}
