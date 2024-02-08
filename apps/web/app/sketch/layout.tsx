import { SketchTabs } from '@portfolio/share-ui';
export const metadata = {
  title: 'Sokhuong Uon | Sketches',
  description:
    'Some of the works that I have done. There are three categories: UI/UX Design, Interactive HTML, and WebGL Experience with three.js',
};

export default function SketchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full ">
      <aside className="w-56">
        <SketchTabs />
      </aside>
      <main className="flex-1 bg-cyan-600">{children}</main>
    </div>
  );
}
