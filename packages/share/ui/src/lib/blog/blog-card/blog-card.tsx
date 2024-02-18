type BlogCardProps = { title: string; subtitle: string; imgUrl: string };
export function BlogCard({ title, subtitle, imgUrl }: BlogCardProps) {
  return (
    <div className="relative aspect-[4/3] ">
      <div
        className="absolute w-full h-full -z-10"
        style={{
          background: `url(${imgUrl})`,
        }}
      ></div>
      <div className="flex flex-col justify-end h-full p-6 text-white bg-transparent bg-gradient-to-t from-black to-transparent">
        <div className="mb-2 text-2xl">{title}</div>
        <div className="text-base">{subtitle}</div>
      </div>
    </div>
  );
}
