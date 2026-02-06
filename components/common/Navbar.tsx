import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" w-full z-20 top-0 fixed start-0 border-b border-default flex gap-20">
      <div className="flex items-center justify-between mx-10 p-2 w-100">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="invert"
        />
        <p className="text-xl font-bold pl-3 whitespace-nowrap">
          Informatics LMS
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <ul className="flex space-x-6">
          <li className="hover:text-primary cursor-pointer font-semibold">
            Courses
          </li>
          <li className="hover:text-primary cursor-pointer font-semibold">
            Roadmaps
          </li>
          <li className="hover:text-primary cursor-pointer font-semibold">
            Community
          </li>
          <li className="hover:text-primary cursor-pointer font-semibold">
            Resources
          </li>
        </ul>
      </div>
      <div className="flex space-x-3 items-center p-5">
        <Button variant="outline" className="font-semibold w-25">
          <Link href="/login">Sign In</Link>
        </Button>
        <Button className="font-semibold w-25">
          <Link href="/register">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
}
