export const dynamic = "force-dynamic"; 
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/general/SumbitButton";
import handleSubmission from "./action";

export default function CreateBlog() {
  return (
    <div className="px-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center mb-10 text-center sm:text-left">
        <Link href="/admin">
          <LayoutDashboard />
        </Link>
        <p>Go to dashboard</p>
      </div>

      <Card className="w-full max-w-md mx-auto py-8 px-4">
        <CardHeader>
          <CardTitle>Upload Contents</CardTitle>
          <CardDescription>Create Posts it will show up on Blog Page</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Enter the title for your post" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Author</Label>
              <Input name="content" required placeholder="Lovely Day" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Upload an Image</Label>
              <Input name="image" required type="file" accept="image/*" />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
