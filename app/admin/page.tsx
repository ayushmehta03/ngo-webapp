import { Button, buttonVariants } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function adminDashboard() {
  return (
    <div className="flex flex-col gap-6 text-black dark:text-gray-300 items-center justify-center px-4 py-8 text-center">
      <h2 className="text-2xl">Welcome Sir</h2>
      <SignOutButton>
        <Button variant={"secondary"}>LogOut</Button>
      </SignOutButton>
      <Link
        className={buttonVariants({ variant: "secondary" })}
        href="/admin/volunteerinfo"
      >
        Volunteer Info
      </Link>
      <Link
        className={buttonVariants({ variant: "secondary" })}
        href="/admin/createblog"
      >
        Create Post
      </Link>
       <Link
        className={buttonVariants({ variant: "secondary" })}
        href="/admin/managepost"
      >
        Manage Posts
      </Link>
      <Link
        className={buttonVariants({ variant: "secondary" })}
        href="/admin/postdignitary"
      >
        Post Dignitary Images
      </Link>
    </div>
  );
}
