"use client"

import { cn } from "@/lib/utils"

interface CareerOptionCardProps {
  title: string
  number: number
  isActive?: boolean
  onClick?: () => void
}

export default function CareerOptionCard({ title, number, isActive = false, onClick }: CareerOptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-10 items-center rounded-full border px-4 transition-colors",
        isActive
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
      )}
    >
      <div
        className={cn(
          "mr-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
          isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700",
        )}
      >
        {number}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </button>
  )
}

