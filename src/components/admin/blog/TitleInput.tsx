export default function TitleInput({
  title,
  setTitle,
}: {
  title: string;
  setTitle: (title: string) => void;
}) {
  return (
    <input
      className="bg-white rounded-md p-3 w-full font-pretendard focus:outline-none"
      type="text"
      placeholder="제목을 입력하세요"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
