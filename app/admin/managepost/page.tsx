import { prisma } from "@/app/utilis/db"
import BlogManage from "./BlogManage";
async function getData() {
  const data = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
export default  async function ManagePost(){
 const data= await getData()
  
    return(
        <>
    <div className="text-center mt-4 mb-6">
        <h1 className="text-gray-900 dark:text-blue-400 text-2xl font-bold">Manage Posts</h1>

    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 max-w-5xl mx-auto ">
            {data.map((item) => (
              <BlogManage key={item.id} data={item} />
            ))}
          </div>
        </>
 )
}