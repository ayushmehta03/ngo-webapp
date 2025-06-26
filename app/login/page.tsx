import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { User } from "lucide-react";
import { redirect } from "next/navigation";

export default async function LogInPage() {
     const {userId}= await auth()
     if(userId){
        redirect("/admin")
     }

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="flex flex-row gap-2 items-center justify-center mb-6">
        <h2 className="text-3xl font-semibold">Admin Login</h2>
        <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>

      <SignInButton mode="modal">
        <Button  variant="default">Sign in with Clerk</Button>
      </SignInButton>
    </div>
  );
}
