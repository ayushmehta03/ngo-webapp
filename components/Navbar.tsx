import Link from "next/link"
import { ModeToggle } from "./ui/ModeToggle"
import logo from "../public/logo.png"
import Image from "next/image"
const Navbar = () => {
  return (
    <nav className="p-5 mb-10 ">
    <div className="flex justify-between items-center px-2 ">
   <Image  className="px-2" src={logo} width={120} alt="ngo-logo"/>
    <ul className="flex space-x-7 px-5  items-center">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
        </li>

                <li>
            <Link href="/blog" className="hover:text-blue-500"     >Our Work</Link>
        </li>
           <li>
            <Link href="/volunteer"   className="hover:text-blue-500"   >Volunteer</Link>
        </li>

      

                   <li>
            <Link href="/contact"   className="hover:text-blue-500"    >Contact Us</Link>
        </li>
        <ModeToggle />
    </ul>
    </div>

    </nav>
  )
}

export default Navbar