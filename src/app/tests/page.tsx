"use client"

import { useState } from "react"
import { Clock, HelpCircle } from "lucide-react"
import { testSidebarItems } from "@/lib/data"
import { Button } from "@/components/ui/Button"


export default function TestsPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between flex-col md:flex-row">
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
        {testSidebarItems.map((test) => (
          <div key={test.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-20 w-20 items-center justify-center rounded-md bg-gray-100">
                {test.icon}
              </div>
              <div>
                <h2 className="text-lg font-medium">{test.title}</h2>
                <div className="mt-1 flex items-center text-sm">
                  <Clock className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Duration</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">Questions</span>
                </div>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-600">Test description goes here.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-amber-600">
                <HelpCircle className="mr-1 h-4 w-4" />
                <span>Not started</span>
              </div>
              <Button variant="primary">Start Test</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
