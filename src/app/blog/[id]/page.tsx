import { Navigation } from '@/components/layout/Navigation'
import { BlogPost } from '@/components/blog/BlogPost'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { Footer } from '@/components/layout/Footer'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <>
      <Navigation />
      <div className="overflow-hidden">
        <BlogPost id={id} />
        <RelatedPosts />
        <NewsletterSignup />
      </div>
      <Footer />
    </>
  )
}