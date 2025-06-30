import SubmitButton from "@/components/general/SumbitButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  Clock, MapPin, PhoneCall, PhoneCallIcon } from "lucide-react"
import handleQuery from "./action"
import { Mail } from "lucide-react"
import whatsapp from "../../public/whatsapp.png"
import Image from "next/image"
import thankyou from "../../public/Super thank you-rafiki.png"
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
      <div className="flex flex-row mt-6  items-center justify-center gap-6">
        <div className="flex flex-row gap-4 ">
        <Mail />
        <p>creativengopurnea0@gmail.com</p>
        
        </div> 
         <div className="flex flex-row gap-4   ">
        <PhoneCallIcon />
        <p className="">+918210143030</p>
        
        </div>
    <div className="flex flex-row gap-4 ">
      <Image  alt="whatsapp" src={whatsapp} width={30} />
        <p className="">+918210143030</p>
        
        </div>
        </div>

        <div className="flex flex-row justify-center items-center mt-6 gap-2">
          <MapPin />
          <p>Asha-Sadan,Near Mahavir Mandir,Shaktinagar Marg,854303, Purnia, Bihar</p>
    
        </div>
        <div className="flex flex-row justify-center items-center mt-6 gap-2">
          <Clock/>
      <p className="">Opens 10AM - 6PM <span className="text-red-600 px-4 text-xl" >Sunday Closed</span> </p>    
        </div>

<div className="mt-6 text-center gap-4 justify-center items-center">
  <p>For more info you can contact us at the given number or fill up the form above</p>
  <Image  alt="thankyou" src={thankyou} width={200}/>

</div>

  

  
    </>

 )
}

