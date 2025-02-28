export default function BlogCategoryText({
  onClick,
  text,
  active,
}: {
  onClick: () => void;
  text: string;
  active: boolean;
}) {
  return (
    <p
      onClick={onClick}
      className={`font-pretendard hover:text-red-400 text-md ${active ? "text-red-500" : "text-theme-light dark:text-neutral-500"} cursor-pointer transition-all duration-300 `}
    >
      {text}
    </p>
  );
}
