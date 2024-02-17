type BlogCardProps = { title: string; subtitle: string; imgUrl: string };
export function BlogCard({ title, subtitle, imgUrl }: BlogCardProps) {
  return (
    <div
      className="h-[300px] w-[450px] flex flex-col justify-end text-white p-6 bg-gradient-to-t from-slate-800 to-transparent"
      // style={{
      //   background: `url(${imgUrl})`,
      // }}
    >
      <div className="mb-2 text-2xl">{title}</div>
      <div>{subtitle}</div>
    </div>
  );
}
