import { Navigation } from '@/components/layout/Navigation'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogCategories } from '@/components/blog/BlogCategories'
import { Footer } from '@/components/layout/Footer'

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="overflow-hidden">
        <BlogCategories />
        <BlogGrid />
      </div>
      <Footer />
    </>
  )
}
