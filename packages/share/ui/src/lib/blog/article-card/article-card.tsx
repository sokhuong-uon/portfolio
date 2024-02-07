import { PropsWithChildren } from 'react';

type ArticleCardProps = PropsWithChildren<{ title: string; subtitle: string }>;
export function ArticleCard({ title, subtitle }: ArticleCardProps) {
  return (
    <div className="flex bg-[#353535] shadow text-white max-w-3xl">
      <div className="w-2/6 "></div>
      <div className="bg-[#1f1f1f] w-4/6 p-6">
        <div className="text-3xl font-bold">{title}</div>
        <div className="mt-2 text-xl">{subtitle}</div>
      </div>
    </div>
  );
}
