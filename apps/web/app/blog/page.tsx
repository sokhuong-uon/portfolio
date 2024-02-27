import { BlogCard } from '@portfolio/share-ui';

export default async function Index() {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4">
          <div className="text-xl">Welcome to blog!</div>
          <div className="mt-2 text-sm">
            Capturing highlight. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>

        {Array.from({ length: 5 }).map((_, i) => (
          <BlogCard
            key={i}
            title="This is Title"
            subtitle="Capturing highlight. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            imgUrl="https://source.unsplash.com/random"
          />
        ))}
      </div>
    </div>
  );
}
