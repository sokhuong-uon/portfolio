import { BlogCard } from '@portfolio/share-ui';

export default async function Index() {
  return (
    <div className="container mx-auto text-2xl text-rose-600">
      <div className="grid grid-cols-3 gap-4 mt-6">
        <span>Welcome to blog!</span>
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
