"use client";

import NavHighlighter from "@/components/NavHighlighter";
import TipTapEditor from "./TipTapEditor";
import { useRouter } from "next/navigation";
import { JSONContent } from "@tiptap/react";

export default function Page() {
  const router = useRouter();

  const handleSave = async (
    title: string,
    content: JSONContent,
    category: string,
    tags: string
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("tags", tags);
    formData.append("category", category);
    formData.append("body", JSON.stringify(content));
    console.log(formData);

    const response = await fetch("http://localhost:8000/posts/", {
      method: "POST",
      headers: {
        Authorization: `Token 48d7004c91f5352ea291d2c2ac5a0d22366f8e90`, // ✅ 인증 필요
      },
      body: formData,
    });

    // 성공 로직 개선
    // 에디터 디자인 변경 및 사진 같은거 다 활성화

    if (response.ok) {
      router.push("/admin/blog"); // 저장 후 목록으로 이동
    } else {
      alert("저장 실패");
    }
  };

  return (
    <div className="w-full bg-admin-bg h-full">
      <NavHighlighter path="/admin/blog" />
      <TipTapEditor onSave={handleSave} />
    </div>
  );
}
