import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export default function LoveShareButtonContainer() {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.info("링크가 복사되었습니다.", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center justify-center border-[1px] gap-3 border-solid border-gray-200 rounded-full py-2 px-6">
        <FaHeart className="text-red-500" />
        <p className="font-pretendard text-gray-500">37</p>
      </div>
      <div onClick={handleShare} className="cursor-pointer font-pretendard">
        🔗 공유하기
      </div>
    </div>
  );
}
