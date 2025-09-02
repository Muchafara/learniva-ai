
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogCategories } from '@/components/blog/BlogCategories'


export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div className="overflow-hidden">
        <BlogCategories />
        <BlogGrid />
      </div>

    </>
  )
}
