// app/admin/postdignitary/page.tsx
import { prisma } from "@/app/utilis/db";
import DignitaryManage from "./DignitaryManage";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

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
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-6 mb-6 text-pink-400 dark:text-pink-500 text-center text-lg font-semibold">
          Sorry, there are no posts right now
        </h2>
        <Link href="/admin/postdignitary" passHref>
          <Button
            variant="ghost"
            className="rounded-2xl px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:brightness-110 scale-110 transition-all"
          >
            Create Posts
          </Button>
        </Link>
      </div>
    );

  return (
    <>
      <div className="text-center mt-4 mb-6">
        <h1 className="text-gray-900 dark:text-blue-400 text-2xl font-bold">
          Manage Posts
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
        {data.map((item) => (
          <DignitaryManage key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
