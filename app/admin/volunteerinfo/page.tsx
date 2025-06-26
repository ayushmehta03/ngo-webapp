import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"
Link
export default function VlounteerInfo(){
    return(
        <>
        <div className="flex flex-row gap-4 items-center justify-center">
                     <LayoutDashboard />

            <Link href="/admin" className={buttonVariants({variant:"ghost"})}> Go to Dashboard</Link>
        </div>
        </>
    )
}