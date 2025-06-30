import SubmitButton from "@/components/general/SumbitButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, MapPin, PhoneCall, PhoneCallIcon, Mail } from "lucide-react"
import handleQuery from "./action"
import whatsapp from "../../public/whatsapp.png"
import Image from "next/image"

export default function Contact() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-black dark:text-gray-300 items-center px-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Contact
          <span className="px-1 text-blue-400 dark:text-blue-600">Us</span>
        </h1>
        <PhoneCall size={24} />
      </div>

      <Card className="w-full max-w-md mx-auto mt-6 px-4 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle>Any queries? </CardTitle>
          <CardDescription>How can we help ?</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-6" action={handleQuery}>
            <div className="flex flex-col gap-2">
              <Label>Enter your name</Label>
              <Input name="name" required type="text" placeholder="Enter your name" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Enter your email id</Label>
              <Input name="email" required type="email" placeholder="xyz@gmail.com" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Ask your queries </Label>
              <Input name="query" required type="text" placeholder="Write down your query" />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row mt-6 items-center justify-center gap-4 px-4 text-center text-black dark:text-gray-300">
        <div className="flex items-center gap-2">
          <Mail />
          <p className="break-all">creativengopurnea0@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <PhoneCallIcon />
          <p>+918210143030</p>
        </div>
        <div className="flex items-center gap-2">
          <Image alt="whatsapp" src={whatsapp} width={24} />
          <p>+918210143030</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2 px-4 text-center text-black dark:text-gray-300">
        <MapPin />
        <p>Asha-Sadan,Near Mahavir Mandir,Shaktinagar Marg,854303, Purnia, Bihar</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-2 px-4 text-center text-black dark:text-gray-300">
        <Clock />
        <p>Opens 10AM - 6PM <span className="text-red-600 text-lg">Sunday Closed</span></p>
      </div>

      <div className="mt-6 mx-auto w-full max-w-md h-[300px] rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4171003866736!2d87.47450979999999!3d25.756783199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9422e78892f%3A0x51d45bb5bee5c97d!2sCreative%20Educational%20And%20Social%20Welfare%20Organization!5e0!3m2!1sen!2sin!4v1751279246413!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-6 text-center px-4 text-black dark:text-gray-300">
        <p>For more info you can contact us at the given number or fill up the form above</p>
      </div>
    </>
  );
}
