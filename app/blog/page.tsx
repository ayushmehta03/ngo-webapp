import BlogCard from "@/components/general/BlogCrad"
import { prisma } from "../utilis/db"

async function getData(){
    const data= await prisma.blogPost.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })
    return data
}

export default async function BlogPage() {
    const data= await getData()
  return (
    <>
      <div className="flex flex-col gap-4 items-center text-center my-8">
        <h1 className="text-3xl font-bold text-black dark:text-gray-300">
          EXPLORE OUR GALLERY
        </h1>
        <h2 className="text-2xl font-semibold text-black dark:text-gray-300">
          Get a glimpse who we are and what do we do
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">
        {data.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </>
  )
}
