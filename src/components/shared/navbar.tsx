"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "My Tests", path: "/tests" },
  { name: "My Sessions", path: "/sessions" },
  { name: "Career Library", path: "/career-library" },
  { name: "Your Report", path: "/report" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 overflow-hidden rounded-md bg-blue-700">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="text-white"
              />
            </div>
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-blue-700",
                      pathname === item.path ? "text-blue-700" : "text-gray-600",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-yellow-400">
            <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
          </div>
        </div>
      </div>
    </header>
  )
}

