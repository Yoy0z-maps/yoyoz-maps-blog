import Image from "next/image";

export default function ArticleInfoView({
  tags,
  date,
  profile,
}: {
  tags: string[];
  date: string;
  profile: {
    nickname: string;
    position: string;
    image: string;
  };
}) {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-2 font-pretendard">
        {tags.map((tag, index) => (
          <p
            className="text-gray-400 px-3 py-1 border border-gray-200 rounded-full"
            key={index}
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-4 justify-start">
        <Image
          src={profile.image}
          alt={profile.nickname}
          className="rounded-full"
          width={37}
          height={37}
        />
        <div className="flex flex-col justify-center items-start font-pretendard">
          <div className="flex gap-1 justify-center items-center">
            <p className="text-lg">{profile.nickname}</p>
            {" · "}
            <p className="text-sm text-gray-500">{profile.position}</p>
          </div>
          <p className="text-gray-400 text-sm">{date} POSTED</p>
        </div>
      </div>
    </div>
  );
}
