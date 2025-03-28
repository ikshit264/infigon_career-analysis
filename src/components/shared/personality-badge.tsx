import { cn } from "@/lib/utils"

interface PersonalityBadgeProps {
  label: string
  variant?: "primary" | "secondary" | "outline"
  className?: string
}

export default function PersonalityBadge({ label, variant = "primary", className }: PersonalityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-medium",
        variant === "primary" && "bg-purple-100 text-purple-700",
        variant === "secondary" && "bg-gray-100 text-gray-700",
        variant === "outline" && "border border-gray-200 bg-white text-gray-700",
        className,
      )}
    >
      {label}
    </span>
  )
}

