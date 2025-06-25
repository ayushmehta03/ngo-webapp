import Link from "next/link"
import { ModeToggle } from "./ui/ModeToggle"


const Navbar = () => {
  return (
    <nav className="p-5 ">
    <div className="flex justify-between items-center t ">
    <ul>
        <li>Creative Educational and Social Welfare</li>
    </ul>
    <ul className="flex space-x-7 px-5  items-center">
        
                <li>
            <Link href="/about" className="hover:text-blue-500"     >Blog</Link>
        </li>
           <li>
            <Link href="/about"   className="hover:text-blue-500"    >Donate</Link>
        </li>

        <li>
            <Link href="/about" className="hover:text-blue-500">About Us</Link>
        </li>


                   <li>
            <Link href="/about"   className="hover:text-blue-500"    >Contact Us</Link>
        </li>
        <ModeToggle />
    </ul>
    </div>

    </nav>
  )
}

export default Navbar