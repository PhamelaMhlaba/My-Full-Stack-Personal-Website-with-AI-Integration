export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ id: string }>
}) {
  const { id } = await params; 

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}