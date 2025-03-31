"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type SidebarItem = {
  id: string
  title: string
  icon?: React.ReactNode
  path: string
  subItems?: {
    id: string
    title: string
    path: string
    subSubItems?: {
      id: string
      title: string
      path: string
    }[]
  }[]
}

interface SidebarProps {
  items: SidebarItem[]
}

export default function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="w-64 border-r border-gray-200 bg-white">
      <nav className="flex flex-col p-4">
        {items.map((item) => {
          const isActive = pathname.includes(item.path)
          const isExpanded = expandedItems[item.id]
          const hasSubItems = item.subItems && item.subItems.length > 0

          return (
            <div key={item.id} className="mb-1">
              <div className="flex flex-col">
                <button
                  onClick={() => toggleItem(item.id)}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                    isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                  {hasSubItems && (
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded ? "rotate-180" : "")} />
                  )}
                </button>

                {hasSubItems && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-1"
                  >
                    {item.subItems!.map((subItem) => {
                      const isSubActive = pathname.includes(subItem.path)
                      const hasSubSubItems = subItem.subSubItems && subItem.subSubItems.length > 0
                      const isSubExpanded = expandedItems[subItem.id]

                      return (
                        <div key={subItem.id} className="mb-1">
                          <div className="flex flex-col">
                            <button
                              onClick={() => toggleItem(subItem.id)}
                              className={cn(
                                "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                                isSubActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100",
                              )}
                            >
                              <span>{subItem.title}</span>
                              {hasSubSubItems && (
                                <ChevronDown
                                  className={cn("h-3 w-3 transition-transform", isSubExpanded ? "rotate-180" : "")}
                                />
                              )}
                            </button>

                            {hasSubSubItems && isSubExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-1"
                              >
                                {subItem.subSubItems!.map((subSubItem) => {
                                  const isSubSubActive = pathname.includes(subSubItem.path)

                                  return (
                                    <Link
                                      key={subSubItem.id}
                                      href={subSubItem.path}
                                      className={cn(
                                        "block rounded-md px-3 py-2 text-xs",
                                        isSubSubActive ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-100",
                                      )}
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  )
                                })}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                )}
              </div>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

