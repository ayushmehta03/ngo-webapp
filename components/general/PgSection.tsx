import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"

export default function PgSection(){
    return(
        <div className="flex flex-col gap-4 items-center p-4 text-2xl justify-center">
           <h2 className="text-center font-bold text-blue-700  dark:text-blue-400">Other Services </h2> 
         <div>
            <Button variant="ghost"  className="w-[130px]  rounded-xl hover:bg-gradient-to-r from-blue-400 to-violet-600">
                <Link href="/blog/pg-info" className="">
                Click Here
                </Link>
                 </Button>

         </div>
        </div>
    )
}
