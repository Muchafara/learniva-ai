import { Navigation } from '@/components/layout/Navigation'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogCategories } from '@/components/blog/BlogCategories'
import { NewsletterSignup } from '@/components/blog/NewsletterSignup'
import { Footer } from '@/components/layout/Footer'

export default function BlogPage() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <NewsletterSignup />
    </div>
  )
}
