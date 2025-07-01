import { LinkIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";
import thankyou from "../public/Super thank you-rafiki.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-8 px-4 text-sm w-full">
      <Image
        src={thankyou}
        width={190}
        alt="thank you footer"
        className="transition-transform hover:scale-110"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center dark:text-gray-300 text-black mb-4 mt-4 px-2">
        <h2 className="font-semibold">About Us:</h2>
        <p>We are dedicated towards promoting sustainable sericulture 🐛</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-3 px-2">
        <div className="flex items-center gap-2 mb-1 text-black dark:text-gray-300">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <LinkIcon size={20} />
        </div>
        <ul className="flex flex-wrap justify-center gap-4 text-black dark:text-gray-300 text-sm">
          <li><Link href="/volunteer">Volunteer</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="flex flex-col items-center mt-4 gap-2 text-black dark:text-gray-300 px-2">
        <h2 className="text-base font-semibold">Contact</h2>
        <ul className="flex flex-col gap-2 text-center text-sm">
          <li className="flex items-center gap-2 justify-center">
            <Mail className="w-4 h-4" />
            creativengopurnea0@gmail.com
          </li>
          <li className="flex items-center gap-2 justify-center">
            <Phone className="w-4 h-4" />
            +91 8210143030
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center text-black dark:text-gray-300 mt-4 text-center text-sm px-2">
        <h2>
          Designed & Developed by{" "}
          <Link
            href="https://www.linkedin.com/in/ayush-mehta-7357ba314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayush Mehta
          </Link>
        </h2>
      </div>

      <div className="mt-4 text-center text-black dark:text-gray-300 text-xs px-2">
        <span>
          © 2025 Creative Educational & Social Welfare Org. All rights reserved
        </span>
      </div>
    </footer>
  );
}
