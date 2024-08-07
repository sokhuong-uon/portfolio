export default async function BlogPost({ params }: { params: { id: string } }) {
  // Fetch your blog post using the `id`...

  return <div className="container mx-auto">this is blog # {params.id}</div>;
}
