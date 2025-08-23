
import { BlogPost } from '@/components/blog/BlogPost'
import { RelatedPosts } from '@/components/blog/RelatedPosts'


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <>

      <div className="overflow-hidden">
        <BlogPost id={id} />
        <RelatedPosts />
      </div>

    </>
  )
}