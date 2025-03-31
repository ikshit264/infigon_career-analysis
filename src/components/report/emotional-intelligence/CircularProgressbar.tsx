"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface ProgressScore {
  id: number;
  color: string;
  title: string;
  score: number;
  scoreColor: string;
  description ?: string;
  strength ?: string[];
}

interface CircularProgressProps {
  scores: ProgressScore[];
  maxScore : number;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ scores, className, maxScore }) => {
  const [isClient, setIsClient] = useState(false)

  // This ensures we only render the animations after component is mounted
  // to prevent hydration issues with SVG animations
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={cn("flex flex-wrap justify-center gap-8", className)}>
      {scores.map((score) => {
        const percentage = (score.score / maxScore) * 100
        const radius = 50
        const circumference = 2 * Math.PI * radius
        const strokeDashoffset = isClient ? circumference - (percentage / 100) * circumference : circumference

        return (
          <div key={score.id} className="flex flex-col items-center">
            <div className="relative h-36 w-36">
              {/* Background circle */}
              <svg className="absolute h-full w-full" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r={radius} fill="transparent" stroke="#E5E7EB" strokeWidth="6" />
              </svg>

              {/* Progress circle */}
              {isClient && (
                <svg className="absolute h-full w-full -rotate-90 transform" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke={score.color}
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {/* Number in the center */}
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ backgroundColor: score.color }}
                >
                  {score.id}
                </div>
              </div>
            </div>

            {/* Title below the circle */}
            <div className="mt-2 text-center font-medium">{score.title}</div>

            {/* Score display */}
            <div className="mt-1 flex items-center space-x-2">
              <span className="text-gray-700">
                {score.score}/{maxScore}
              </span>
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: score.scoreColor }}></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CircularProgress

