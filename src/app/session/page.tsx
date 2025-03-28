"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { sessionsList } from "@/lib/data"
import { Button } from "@/components/ui/Button"

export default function SessionsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all")

  const filteredSessions = sessionsList.filter((session) => {
    if (filter === "all") return true
    return session.status === filter
  })

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Sessions</h1>
        <div className="flex space-x-2">
          <Button variant={filter === "all" ? "primary" : "outline"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "upcoming" ? "primary" : "outline"} onClick={() => setFilter("upcoming")}>
            Upcoming
          </Button>
          <Button variant={filter === "completed" ? "primary" : "outline"} onClick={() => setFilter("completed")}>
            Completed
          </Button>
        </div>
      </div>

      <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-800">
        <h2 className="mb-2 text-lg font-medium">Book a Session</h2>
        <p className="mb-4 text-sm">
          Connect with a career counsellor to discuss your test results and get personalized guidance.
        </p>
        <Button>Find a Counsellor</Button>
      </div>

      <div className="space-y-4">
        {filteredSessions.map((session) => (
          <div key={session.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={session.counsellorImage || "/placeholder.svg"}
                  alt={session.counsellorName}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">{session.counsellorName}</h2>
                  {session.status === "completed" ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Completed
                    </span>
                  ) : (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Upcoming
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-base font-medium">{session.topic}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                  <span>{session.date}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <Clock className="mr-1 h-4 w-4 text-gray-500" />
                  <span>{session.time}</span>
                </div>
                {session.notes && (
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-medium">Notes:</span> {session.notes}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              {session.status === "completed" ? (
                <>
                  <Button variant="outline">View Notes</Button>
                  <Button>Book Follow-up</Button>
                </>
              ) : (
                <>
                  <Button variant="outline">Reschedule</Button>
                  <Button>Join Session</Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
