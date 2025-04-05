import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { toast, Bounce } from "react-toastify";
import { API_SERVER_ADDRESS } from "@/constant/api_address";

export default function LoveShareButtonContainer({
  likeCount,
  postId,
}: {
  likeCount: number;
  postId: string;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.info("링크가 복사되었습니다.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleLove = async ({ postId }: { postId: string }) => {
    if (isLiked) return;

    console.log("clicked");
    console.log(postId);

    const result = await fetch(`${API_SERVER_ADDRESS}/posts/${postId}/like/`, {
      method: "POST",
    });

    console.log(result);

    if (result.ok) {
      setIsLiked(true);
      setLocalLikeCount((prev) => prev + 1);
      setShowPlusOne(true);

      setTimeout(() => setShowPlusOne(false), 800);

      toast.success("소중한 좋아요 감사합니다.");
      try {
        localStorage.setItem(`liked_${postId}`, "true");
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("좋아요 누르기에 실패했어요.");
    }
  };

  useEffect(() => {
    const liked = localStorage.getItem(`liked_${postId}`);
    if (liked) {
      setIsLiked(true);
    }
  }, [postId]);

  return (
    <div className="flex items-center justify-between mb-8">
      <div
        onClick={() => handleLove({ postId })}
        className="relative flex items-center justify-center border-[1px] gap-3 border-solid border-gray-200 rounded-full py-2 px-6 cursor-pointer overflow-hidden"
      >
        {isLiked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <IoIosHeartEmpty className="text-gray-500" />
        )}

        <p className="font-pretendard text-gray-500">{localLikeCount}</p>
        {showPlusOne && (
          <span className="absolute font-pretendard text-red-500 text-sm font-bold animate-plusOne">
            +1
          </span>
        )}
      </div>

      <div onClick={handleShare} className="cursor-pointer font-pretendard">
        🔗 공유하기
      </div>
    </div>
  );
}
