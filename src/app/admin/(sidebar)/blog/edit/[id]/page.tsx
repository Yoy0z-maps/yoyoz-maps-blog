import NavHighlighter from "@/components/NavHighlighter";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full bg-admin-bg overflow-y-auto">
      <NavHighlighter path="/admin/blog" />
      params.id
    </div>
  );
}
