import Image from "next/image";

export default function ArticleAuthor({
  profileImage,
  author,
}: {
  profileImage: string;
  author: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="rounded-full w-8 h-8 object-cover"
        src={profileImage}
        alt="profile"
        width={30}
        height={30}
      />
      <p className="font-pretendard text-theme-light dark:text-theme-dark font-light">
        {author}
      </p>
    </div>
  );
}
