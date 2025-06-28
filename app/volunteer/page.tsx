import SubmitButton from "@/components/general/SumbitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import VolunteerMain from "@/components/VolunteerMain";
export default function Volunteer() {
  return (
    <>
    <VolunteerMain/>
   <Card className="max-w-lg mx-auto py-8 px-2 bg-black  ">
        <CardHeader>
            <CardTitle>Upload Contents</CardTitle>
            <CardDescription>Create Posts it will show up on Blog Page</CardDescription>
            
        </CardHeader>
        <CardContent>
            <form className="flex flex-col gap-4" >
                <div className="flex flex-col gap-4">
                   <Label>Enter your name</Label>
                   <Input  name="fullname" required type="text" placeholder="Enter your full name"></Input>

                </div>
                 <div className="flex flex-col gap-4">
                   <Label>Enter your email id</Label>
                   <Input name="mailid" required  placeholder="xyz@gmail.com"></Input>

                </div>
                  <div className="flex flex-col gap-4">
                   <Label>How you can support us?</Label>
                   <Input  name="supportType" required type="text"></Input>
                </div>
                 <div className="flex flex-col gap-4 mb-4">
                   <Label>Enter your phone no</Label>
                   <Input  name="phoneNo" required type="text" placeholder="91xxxxxxx"></Input>
                </div>

                <SubmitButton />
         </form>
        </CardContent>
        </Card>
    </>
  );
}