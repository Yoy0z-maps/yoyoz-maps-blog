import { useRef } from "react";

export default function ThumbnailSelector({
  thumbnail,
  setThumbnail,
}: {
  thumbnail: File | null;
  setThumbnail: (thumbnail: File | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
    }
  };

  const handleRemoveImage = () => {
    setThumbnail(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-4 border rounded max-w-md">
      {thumbnail ? (
        <div className="flex items-center justify-between">
          <span>{thumbnail.name}</span>
          <button
            onClick={handleRemoveImage}
            className="text-red-500 font-bold ml-4"
          >
            x
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          사진 업로드하기
        </button>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
