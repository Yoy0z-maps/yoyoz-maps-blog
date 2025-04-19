import ArticleCounterItem from "@/components/blog/ArticleCounterItem";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

export default function ArticleCouter({
  like,
  comment,
  view,
}: {
  like: number;
  comment: number;
  view: number;
}) {
  return (
    <div className="flex gap-x-4">
      <ArticleCounterItem icon={<AiFillHeart />} count={like} />
      <ArticleCounterItem icon={<FaCommentDots />} count={comment} />
      <ArticleCounterItem icon={<AiOutlineEye />} count={view} />
    </div>
  );
}
