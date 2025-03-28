"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Clock, HelpCircle } from "lucide-react"
import { testsList } from "@/lib/data"
import { Button } from "@/components/ui/Button"

export default function TestsPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all")

  const filteredTests = testsList.filter((test) => {
    if (filter === "all") return true
    if (filter === "completed") return test.completed
    return !test.completed
  })

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Tests</h1>
        <div className="flex space-x-2">
          <Button variant={filter === "all" ? "primary" : "outline"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "completed" ? "primary" : "outline"} onClick={() => setFilter("completed")}>
            Completed
          </Button>
          <Button variant={filter === "incomplete" ? "primary" : "outline"} onClick={() => setFilter("incomplete")}>
            Incomplete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTests.map((test) => (
          <div key={test.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-20 w-20 overflow-hidden rounded-md">
                <Image src={test.image || "/placeholder.svg"} alt={test.title} width={80} height={80} />
              </div>
              <div>
                <h2 className="text-lg font-medium">{test.title}</h2>
                <div className="mt-1 flex items-center text-sm">
                  <Clock className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{test.duration}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{test.questions} questions</span>
                </div>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-600">{test.description}</p>
            <div className="flex items-center justify-between">
              {test.completed ? (
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  <span>Completed</span>
                </div>
              ) : (
                <div className="flex items-center text-sm text-amber-600">
                  <HelpCircle className="mr-1 h-4 w-4" />
                  <span>Not started</span>
                </div>
              )}
              <Button variant={test.completed ? "outline" : "primary"}>
                {test.completed ? "View Results" : "Start Test"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

