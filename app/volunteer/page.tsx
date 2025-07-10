import SubmitButton from "@/components/general/SumbitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import VolunteerMain from "@/components/VolunteerMain";
import handleSumbission from "./action";
import Roles from "@/components/Roles";

export default function Volunteer() {
  return (
    <>
      <VolunteerMain />
      <Card className="w-full max-w-md mx-auto py-8 px-4 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle>Tell us About You</CardTitle>
          <CardDescription>Kindly fill in the information</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" action={handleSumbission}>
            <div className="flex flex-col gap-2">
              <Label>Enter your name</Label>
              <Input
                name="fullname"
                required
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Enter your email id</Label>
              <Input
                name="mailid"
                required
                type="email"
                placeholder="xyz@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>How you can support us?</Label>
              <Input
                name="supportType"
                required
                type="text"
                placeholder="Describe in few words"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Enter your phone no</Label>
              <Input
                name="phoneNo"
                required
                type="tel"
                placeholder="91xxxxxxx"
              />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </>
  );
}
