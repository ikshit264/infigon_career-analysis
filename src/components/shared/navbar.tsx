"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
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
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#mobile-menu")) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* ✅ Left Section (Logo & Mobile Menu Button) */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 overflow-hidden rounded-md bg-blue-700">
              <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* ✅ Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-700",
                    pathname.includes(item.path) ? "text-blue-700" : "text-gray-600",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Right Section (Notifications & Profile) */}
        <div className="flex items-center space-x-4">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-yellow-400">
            <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu (Slide-in) */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg md:hidden"
        >
          <div className="flex flex-col h-full p-6">
            <button onClick={() => setIsOpen(false)} className="self-end mb-4">
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="block text-sm font-medium text-gray-600 hover:text-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
