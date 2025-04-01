"use client";

import { useCurrentEditor } from "@tiptap/react";
import TagSelector from "./TagSelector";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TipTapEditorContent({
  title,
  category,
  thumbnail,
}: {
  title: string;
  category: string;
  thumbnail: File | null;
}) {
  const { editor } = useCurrentEditor();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  // 저장 버튼 클릭 시 실행
  const handleSaveDraft = async () => {
    // 1. 브라우저에 캐시 저장
    // 2. 글 완성후 포스팅되면 캐시 삭제
    // 3. 블로그 에딧페이지 들어왔을 때 캐시가 있으면 이어서 작성하는 문서가 있는데 이어서 작성하겠냐고 물어봐야함
    console.log("clicked");
  };

  const router = useRouter();

  const handleSave = async () => {
    if (!thumbnail) {
      alert("썸네일을 업로드해주세요.");
      return;
    }
    if (!editor) return;
    const content = editor.getJSON();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tags", JSON.stringify(tags));
    formData.append("category", category);
    formData.append("body", JSON.stringify(content));
    formData.append("image", thumbnail);

    const response = await fetch("https://yoy0z-maps.com/posts/", {
      method: "POST",
      headers: {
        Authorization: `Token b5db0ce2d2d5018b5bfbbb5bf9638872a0f876b1`, // ✅ 인증 필요: johnhan0923 계정 Token
      },
      body: formData,
    });

    // 성공 로직 개선
    // 에디터 디자인 변경 및 사진 같은거 다 활성화

    if (response.ok) {
      alert("저장 완료");
      router.push("/admin/blog"); // 저장 후 목록으로 이동
    } else {
      alert("저장 실패");
    }
  };

  return (
    <>
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
          onClick={handleSave}
        >
          포스팅
        </button>
      </div>
    </>
  );
}
