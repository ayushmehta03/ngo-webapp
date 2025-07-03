export const dynamic = "force-dynamic"; 

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { columns, Details } from "../../../components/columns";
import { DataTable } from "../../../components/data-table";
import { LayoutDashboard } from "lucide-react";
import { prisma } from "@/app/utilis/db";
import { format } from "date-fns";

async function getData(): Promise<Details[]> {
  const data = await prisma.volunteerInfo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data.map((item) => ({
    fullName: item.fullName,
    mailId: item.mailId,
    phoneno: item.phoneno,
    createdAt: format(item.createdAt, "dd/MM/yy"),
  }));
}

export default async function VolunteerInfo() {
  const data = await getData();

  return (
    <div className="space-y-6 px-4 py-6 w-full">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="text-muted-foreground" />
          <Link href="/admin" className={buttonVariants({ variant: "ghost" })}>
            Go to Dashboard
          </Link>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
