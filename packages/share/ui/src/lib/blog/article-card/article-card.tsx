type ArticleCardProps = PropsWithChildren<{ title: string }>;
export function ArticleCard({ title }: ArticleCardProps) {
  return (
    <div className="flex p-4 shadow">
      <div className="w-2/6 bg-slate-800 ">yes</div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}
