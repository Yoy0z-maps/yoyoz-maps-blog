import React, { useState } from "react";

interface TagSelectorProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export default function TagSelector({ tags, setTags }: TagSelectorProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      // 중복 태그 방지
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue(""); // 입력 필드 초기화
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="bg-white rounded-md mt-3 w-full font-pretendard">
      <div className="text-sm font-pretendard text-gray-500">
        태그를 입력하고 Enter를 눌러주세요
      </div>

      {/* 태그 입력 필드 */}
      <input
        type="text"
        value={inputValue}
        className="w-full border-solid border-[1px] border-gray-300 rounded-md p-2 focus:outline-none"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* 태그 목록 */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md"
          >
            <span>{tag}</span>
            <button
              onClick={() => removeTag(tag)}
              className="ml-1 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
