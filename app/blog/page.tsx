import BlogCard from "@/components/general/BlogCrad";
import { prisma } from "../utilis/db";
import { Image } from "lucide-react";

async function getData() {
  const data = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function BlogPage() {
  const data = await getData();
  return (
    <>
      <div className="flex flex-col gap-3 items-center text-center my-6 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-gray-300 flex items-center gap-2">
          Our Story in Frames <Image size={20}  />
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-black dark:text-gray-300">
          A visual diary of change, one frame at a time
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 max-w-5xl mx-auto">
        {data.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
