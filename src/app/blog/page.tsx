
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogCategories } from '@/components/blog/BlogCategories'


export default function BlogPage() {
  return (
    <>

      <div className="overflow-hidden">
        <BlogCategories />
        <BlogGrid />
      </div>

    </>
  )
}
