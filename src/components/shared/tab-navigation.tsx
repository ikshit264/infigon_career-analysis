"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TabNavigationProps {
  tabs: {
    id: string
    label: string
  }[]
  defaultTab?: string
  onChange?: (tabId: string) => void
}

export default function TabNavigation({ tabs, defaultTab, onChange }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    if (onChange) {
      onChange(tabId)
    }
  }

  return (
    <div className="border-b border-gray-200 max-w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-8 flex-nowrap whitespace-nowrap">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "relative py-4 text-sm font-medium transition-colors",
                isActive ? "text-blue-700" : "text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
