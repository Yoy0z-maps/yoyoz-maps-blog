import { LuArrowDownRight } from "react-icons/lu";

const className =
  "inline-flex p-2 bg-red-500 rounded-sm cursor-pointer hover:bg-red-600 transition-all duration-300";

export default function BlogRedButton() {
  return (
    <span className={className} aria-hidden="true">
      <LuArrowDownRight size={28} color="white" />
    </span>
  );
}
