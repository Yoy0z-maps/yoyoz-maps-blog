export default function ArticleCounterItem({
  icon,
  count,
}: {
  icon: React.ReactNode;
  count: number;
}) {
  return (
    <div className="flex items-center gap-x-2">
      {icon}
      <p>{count}</p>
    </div>
  );
}
