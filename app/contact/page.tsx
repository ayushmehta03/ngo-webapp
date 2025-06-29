import SubmitButton from "@/components/general/SumbitButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneCall } from "lucide-react"
import handleQuery from "./action"

export default function Contact(){
 return(
    <>
    <div className="flex flex-row gap-4 justify-center text-black dark:text-gray-300  items-center ">
        <h1 className="text-center text-3xl   font-semibold ">Contact
               <span className="text-3xl font-semibold px-1 text-blue-400 dark:text-blue-600 ">Us</span>
        </h1>
         <PhoneCall size={28} />
    </div>

   <Card className="max-w-lg mx-auto mt-6  px-1 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle>Any queries? </CardTitle>
          <CardDescription>How can we help ?</CardDescription>
        </CardHeader>

        <CardContent>
          <form  className="flex flex-col gap-6" action={handleQuery}>
            <div className="flex flex-col gap-4">
              <Label>Enter your name</Label>
              <Input 
                name="name"
                required
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label>Enter your email id</Label>
              <Input
                name="email"
                required
                type="email"
                placeholder="xyz@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label>Ask your queries </Label>
              <Input
                name="query"
                required
                type="text"
                placeholder="Write down your query"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </>

 )
}
