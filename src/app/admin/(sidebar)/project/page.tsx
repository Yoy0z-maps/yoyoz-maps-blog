import NavHighlighter from "@/components/NavHighlighter";

export default function Page() {
  return (
    <div className="w-full bg-admin-bg">
      <NavHighlighter path="/admin/project" />
      <div>ProjectPage</div>
    </div>
  );
}
