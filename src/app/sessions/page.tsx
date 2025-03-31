"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { sessionsList } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function SessionsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const filteredSessions = sessionsList.filter((session) => {
    if (filter === "all") return true;
    return session.status === filter;
  });

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header & Filters */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-xl font-bold sm:text-2xl">My Sessions</h1>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "primary" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "upcoming" ? "primary" : "outline"}
            onClick={() => setFilter("upcoming")}
          >
            Upcoming
          </Button>
          <Button
            variant={filter === "completed" ? "primary" : "outline"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </div>
      </div>

      {/* Booking Section */}
      <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-800">
        <h2 className="mb-2 text-lg font-medium">Book a Session</h2>
        <p className="mb-4 text-sm">
          Connect with a career counsellor to discuss your test results and get
          personalized guidance.
        </p>
        <Button>Find a Counsellor</Button>
      </div>

      {/* Session List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSessions.map((session) => (
          <div
            key={session.id}
            className="rounded-lg border border-gray-200 justify-between bg-white p-4 shadow-sm"
          >
            <div className="flex items-start">
              {/* Counsellor Image */}
              <div className="mr-3 h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
                <Image
                  src={session.counsellorImage || "/placeholder.svg"}
                  alt={session.counsellorName}
                  width={56}
                  height={56}
                />
              </div>

              {/* Session Details */}
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center justify-evenly">
                  <h2 className="text-base font-medium sm:text-lg">
                    {session.counsellorName}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium flex items-center ${
                      session.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                  </span>
                </div>

                <h3 className="mt-1 text-sm font-medium sm:text-base">
                  {session.topic}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-600 sm:text-sm">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                    {session.date}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4 text-gray-500" />
                    {session.time}
                  </span>
                </div>

                {session.notes && (
                  <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                    <span className="font-medium">Notes:</span> {session.notes}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap justify-end gap-2 sm:gap-3">
              {session.status === "completed" ? (
                <>
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Notes
                  </Button>
                  <Button className="w-full sm:w-auto">Book Follow-up</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Reschedule
                  </Button>
                  <Button className="w-full sm:w-auto">Join Session</Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
