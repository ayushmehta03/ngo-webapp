import Link from "next/link";
import { ModeToggle } from "./ui/ModeToggle";
import logo from "../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-4 mb-8 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-2">
        <div className="flex justify-center sm:justify-start">
          <Image className="px-2" src={logo} width={120} alt="ngo-logo" />
        </div>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-6 px-2 text-sm sm:text-base">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500">
              Our Work
            </Link>
          </li>
                    <li>
          <Link href="/dignitary" className="hover:text-blue-500">
          Dignitary Visits
          </Link>
          </li>
          <li>
            <Link href="/volunteer" className="hover:text-blue-500">
              Volunteer
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>

          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
