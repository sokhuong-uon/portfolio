import { PropsWithChildren } from 'react';

type SketchCardProps = PropsWithChildren<{ title: string }>;
export function SketchCard({ title, children }: SketchCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">{children}</div>
      <div className="mt-4">
        <p>{title}</p>
      </div>
    </div>
  );
}
