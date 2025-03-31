import { BLOGCATEGORIES } from "@/constant/blogcategories";

export default function CategorySelector({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (category: string) => void;
}) {
  return (
    <div className="bg-white rounded-md p-3 w-full font-pretendard">
      <div className="flex gap-2">
        {BLOGCATEGORIES.map((item) => (
          <div
            onClick={() => setCategory(item.name)}
            key={item.id}
            className={`${
              category === item.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            } rounded-md w-full text-center cursor-pointer py-3 font-pretendard hover:bg-blue-400 hover:text-white`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
