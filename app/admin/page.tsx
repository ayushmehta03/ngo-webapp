import { Button, buttonVariants } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import Link from 'next/link'
export default function adminDashboard(){
    return(
        <div className="flex  gap-6 flex-col text-black dark:text-gray-300 items-center justify-center">
    <h2 className="text-2xl ">Welcome Sir</h2>
    <SignOutButton>
        <Button  variant={"secondary"}>LogOut</Button>
    </SignOutButton>
     <Link  className={buttonVariants({variant:"secondary"})} href="/admin/volunteerinfo">Volunteer Info </Link>
     <Link  className={buttonVariants({variant:"secondary"})} href="/admin/createblog">Create Blog </Link>

    </div>
    )
}