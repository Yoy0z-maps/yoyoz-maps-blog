export default function ArticleTitleView({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  return (
    <div className="relative flex items-center justify-center mb-8">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="absolute w-full h-full bg-black/20 flex items-center justify-center">
        <p className="text-white text-2xl font-bold text-center">
          {category}: {title}
        </p>
      </div>
    </div>
  );
}
