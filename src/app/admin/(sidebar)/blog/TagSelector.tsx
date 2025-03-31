export default function TagSelector({
  setTags,
}: {
  setTags: (tags: string) => void;
}) {
  return (
    <div className="bg-white rounded-md mt-3 w-full font-pretendard">
      <div className="text-sm font-pretendard text-gray-500">
        태그를 입력해주세요 (쉼표로 구분)
      </div>
      <input
        type="text"
        className="w-full border-solid border-[1px] border-gray-300 rounded-md p-2 focus:outline-none"
        onChange={(e) => setTags(e.target.value)}
      />
    </div>
  );
}
