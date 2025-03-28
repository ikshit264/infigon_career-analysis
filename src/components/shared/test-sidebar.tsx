"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

type TestItem = {
  id: number
  title: string
  icon: string
  path: string
  subItems: {
    id: string
    title: string
    path: string
  }[]
}

interface TestSidebarProps {
  tests: TestItem[]
}

export default function TestSidebar({ tests }: TestSidebarProps) {
  const pathname = usePathname()
  const [activeTest, setActiveTest] = useState<number | null>(1)

  return (
    <div className="w-56 border-r border-gray-200 bg-white">
      <div className="flex flex-col p-4">
        {tests.map((test) => {
          const isActive = activeTest === test.id

          return (
            <div key={test.id} className="mb-4">
              <button
                onClick={() => setActiveTest(isActive ? null : test.id)}
                className={cn(
                  "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                  isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center">
                  <Image
                    src={test.icon || "/placeholder.svg?height=32&width=32"}
                    alt={test.title}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">TEST {test.id}</div>
                  <div className="text-sm font-medium">{test.title}</div>
                </div>
              </button>

              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 mt-1"
                >
                  {test.subItems.map((subItem) => {
                    const isSubActive = pathname.includes(subItem.path)

                    return (
                      <Link
                        key={subItem.id}
                        href={subItem.path}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm",
                          isSubActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100",
                        )}
                      >
                        {subItem.title}
                      </Link>
                    )
                  })}
                </motion.div>
              )}
            </div>
          )
        })}

        <div className="mt-auto pt-4">
          <button className="flex w-full items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
            Download Report Card
          </button>
        </div>
      </div>
    </div>
  )
}

