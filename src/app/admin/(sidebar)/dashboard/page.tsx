import NavHighlighter from "@/components/NavHighlighter";

export default function Page() {
  return (
    <div className="bg-admin-bg w-full">
      <NavHighlighter path="/admin/dashboard" />
      <div>AdminDashboardPage</div>
    </div>
  );
}
