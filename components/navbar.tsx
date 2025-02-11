"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from './assets/logo3.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black">
      {/* <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
        <div className="container mx-auto px-20 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>📅</span>
            <span>Book a live demo session</span>
            <span>⏰</span>
            <span>Next cohort starts on 21st Feb, 2025</span>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Book Now
          </Button>
        </div>
      </div> */}

      <nav className="container mx-auto px-4 py-4 lg:max-w-full ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              {/* Ed<span className="text-red-600">Tech</span> */}
              <Image
                className="h-16"
                height={50}
                width={200}
                src={Logo}
                alt={""}
              ></Image>
            </Link>

            {/* <button className="flex items-center space-x-1">
              <span>Courses</span>
              <ChevronDown className="w-4 h-4" />
            </button> */}
          </div>

          {/* <div className="hidden md:flex text-white items-center space-x-6">
            <Link href="#" className="hover:text-gray-300">
              Practice
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Jobs
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Masterclass
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Placements
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Hire From Us
            </Link>
            <Link href="#" className="hover:text-gray-300">
              About Us
            </Link>
            <Button className="bg-red-600 hover:bg-red-700">SIGN IN</Button>
          </div> */}

          {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button> */}
        </div>

        {/* {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="#" className="block hover:text-gray-300">
              Practice
            </Link>
            <Link href="#" className="block hover:text-gray-300">
              Jobs
            </Link>
            <Link href="#" className="block hover:text-gray-300">
              Masterclass
            </Link>
            <Link href="#" className="block hover:text-gray-300">
              Placements
            </Link>
            <Link href="#" className="block hover:text-gray-300">
              Hire From Us
            </Link>
            <Link href="#" className="block hover:text-gray-300">
              About Us
            </Link>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              SIGN IN
            </Button>
          </div>
        )} */}
      </nav>
    </header>
  );
}

