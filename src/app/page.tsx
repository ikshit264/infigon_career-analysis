import Link from "next/link"
import { ArrowRight } from "lucide-react"
import clsx from "clsx"

// Custom Button Component
const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <button className={clsx("px-4 py-2 text-white bg-blue-600 rounded-lg flex items-center gap-2 transition hover:bg-blue-700", className)}>
      {children}
    </button>
  )
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-6 text-4xl font-bold">Career Analysis Platform</h1>
      <p className="mb-8 max-w-2xl text-lg text-gray-600">
        Discover your ideal career path with personalized insights based on your personality, interests, and skills.
      </p>
      <Link href="/report">
        <Button>
          View Your Report <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </main>
  )
}
