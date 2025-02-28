import ArticleCounterItem from "@/components/blog/ArticleCounterItem";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

export default function ArticleCouter() {
  return (
    <div className="flex gap-x-4">
      <ArticleCounterItem icon={<AiFillHeart />} count={48} />
      <ArticleCounterItem icon={<FaCommentDots />} count={13} />
      <ArticleCounterItem icon={<AiOutlineEye />} count={3821} />
    </div>
  );
}
