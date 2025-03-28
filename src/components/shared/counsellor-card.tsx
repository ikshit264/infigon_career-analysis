import Image from "next/image"
import clsx from "clsx"

interface CounsellorCardProps {
  name: string
  specialty: string
  rating: number
  image: string
  location: string
  distance: string
}

// Custom Card Component
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={clsx("border rounded-lg shadow-sm p-4 bg-white", className)}>{children}</div>
}

// Custom Button Component
const Button = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full px-4 py-2 text-sm font-medium border rounded-lg transition hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  )
}

export default function CounsellorCard({ name, specialty, rating, image, location, distance }: CounsellorCardProps) {
  return (
    <Card className="h-full">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{specialty}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{rating}</span>
        </div>
        <div className="mt-2 text-gray-600">
          <div>{location}</div>
          <div>{distance}</div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-4">
        <Button>Book Session</Button>
      </div>
    </Card>
  )
}
