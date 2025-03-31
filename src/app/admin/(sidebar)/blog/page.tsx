import NavHighlighter from "@/components/NavHighlighter";
import TipTapEditor from "../../../../components/admin/blog/TipTapEditor";

export default function Page() {
  return (
    <div className="w-full bg-admin-bg overflow-y-auto">
      <NavHighlighter path="/admin/blog" />
      <TipTapEditor />
    </div>
  );
}
