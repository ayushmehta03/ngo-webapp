import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SubmitButton from "@/components/general/SumbitButton"
import handleSubmission from "./action"

export default function CreateBlog(){
    return(
        <div>
        <div className="flex flex-row gap-4 items-center justify-center p-3">
                     <LayoutDashboard />

            <Link href="/admin" className={buttonVariants({variant:"ghost"})}> Go to Dashboard</Link>
        </div>
        <Card className="max-w-lg mx-auto py-8  ">
        <CardHeader>
            <CardTitle>Upload Contents</CardTitle>
            <CardDescription>Create Posts it will show up on Blog Page</CardDescription>
            
        </CardHeader>
        <CardContent>
            <form className="flex flex-col gap-4" action={handleSubmission}>
                <div className="flex flex-col gap-4">
                   <Label>Title</Label>
                   <Input  name="title" required type="text" placeholder="Enter the title for your post"></Input>

                </div>
                 <div className="flex flex-col gap-4">
                   <Label>Content</Label>
                   <Textarea name="content" required  placeholder="Lovely Day"></Textarea>

                </div>
                  <div className="flex flex-col gap-4">
                   <Label>Image</Label>
                   <Input  name="url" required type="text" placeholder="Upload your image"></Input>
                </div>
                <SubmitButton />
         </form>
        </CardContent>
        </Card>
        </div>   

 )
}