import { prisma } from "@/app/utilis/db";
import DignitaryManage from "./DignitrayManage";

async function getData() {
  const data = await prisma.dignitaryVisit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function ManageDignitary() {
  const data = await getData();
  
  if (data.length === 0)
    return (
      <div className="flex justify-center items-center">
        <h2 className="mt-6 text-pink-400 dark:text-pink-500">
          Sorry, there are no posts right now
        </h2>
      </div>
    );

  return (
    <>
      <div className="text-center mt-4 mb-6">
        <h1 className="text-gray-900 dark:text-blue-400 text-2xl font-bold">
          Manage Posts
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 max-w-5xl mx-auto">
        {data.map((item) => (
          <DignitaryManage key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
