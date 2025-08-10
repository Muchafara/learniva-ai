import { Navigation } from '@/components/layout/Navigation'
import { BlogPost } from '@/components/blog/BlogPost'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { Footer } from '@/components/layout/Footer'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <BlogPost id={params.id} />
      <RelatedPosts />
      <NewsletterSignup />
      <Footer />
    </div>
  )
}
