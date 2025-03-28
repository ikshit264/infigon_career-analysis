import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  className?: string
  children: ReactNode
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg transition focus:outline-none",
        {
          primary: "bg-blue-600 text-white hover:bg-blue-700",
          outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
          ghost: "text-gray-600 hover:bg-gray-200",
        }[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
