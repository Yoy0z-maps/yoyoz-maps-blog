"use client";

import { useCurrentEditor } from "@tiptap/react";
import TagSelector from "./TagSelector";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

type PostData = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  category: string;
  image: string;
};

export default function TipTapEditorContent({
  title,
  category,
  thumbnail,
  postData,
}: {
  title: string;
  category: string;
  thumbnail: File | null;
  postData: PostData | null;
}) {
  const { editor } = useCurrentEditor();
  const [isSaving, setIsSaving] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (postData) {
      setTags(JSON.parse(postData.tags[0]));
    }
  }, [postData]);

  // 저장 버튼 클릭 시 실행
  const handleSaveDraft = async () => {
    // 1. 브라우저에 캐시 저장
    // 2. 글 완성후 포스팅되면 캐시 삭제
    // 3. 블로그 에딧페이지 들어왔을 때 캐시가 있으면 이어서 작성하는 문서가 있는데 이어서 작성하겠냐고 물어봐야함
    console.log("clicked");
  };

  const router = useRouter();

  const handleEdit = async () => {
    if (!editor) return;

    setIsSaving(true); // 저장 중 시작
    try {
      const content = editor.getJSON();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", JSON.stringify(tags));
      formData.append("category", category);
      formData.append("body", JSON.stringify(content));

      const response = await fetch(`/api/posts/${postData?.id}`, {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        alert("수정 완료");
        router.push("/admin/blog");
      } else {
        alert("수정 실패");
      }
    } catch (e) {
      alert(`에러 발생: ${e}`);
    } finally {
      setIsSaving(false); // 저장 끝
    }
  };

  const handleSave = async () => {
    if (!thumbnail) {
      alert("썸네일을 업로드해주세요.");
      return;
    }

    if (!editor) return;

    setIsSaving(true); // 저장 중 시작
    try {
      const content = editor.getJSON();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", JSON.stringify(tags));
      formData.append("category", category);
      formData.append("body", JSON.stringify(content));
      formData.append("image", thumbnail);

      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("저장 완료");
        router.push("/admin/blog");
      } else {
        alert("저장 실패");
      }
    } catch (err) {
      console.error("저장 중 에러", err);
      alert("에러 발생");
    } finally {
      setIsSaving(false); // 저장 끝
    }
  };

  return (
    <>
      {isSaving && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      <TagSelector tags={tags} setTags={setTags} />
      <div className="flex justify-end gap-3 mt-3">
        <button
          className="text-base font-pretendard text-center bg-white hover:border-blue-500 border-solid border-[1px] rounded-md cursor-pointer border-blue-600 hover:bg-blue-500 hover:text-white text-blue-600 py-2 px-5"
          onClick={handleSaveDraft}
        >
          임시저장
        </button>
        <button
          className="text-base font-pretendard text-center bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500 py-2 px-5"
          onClick={postData ? handleEdit : handleSave}
        >
          {postData ? "수정" : "포스팅"}
        </button>
      </div>
    </>
  );
}
