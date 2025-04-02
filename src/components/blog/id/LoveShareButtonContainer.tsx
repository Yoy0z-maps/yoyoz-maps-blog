import { FaHeart } from "react-icons/fa";

export default function LoveShareButtonContainer() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center justify-center border-[1px] gap-3 border-solid border-gray-200 rounded-full py-2 px-6">
        <FaHeart className="text-red-500" />
        <p className="font-pretendard text-gray-500">37</p>
      </div>
      <div className="cursor-pointer font-pretendard">🔗 공유하기</div>
    </div>
  );
}
