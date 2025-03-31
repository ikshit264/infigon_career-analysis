"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import clsx from "clsx"
import { careerLibraryItems } from "@/lib/data"
import { Button } from "@/components/ui/Button"

export default function CareerLibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(careerLibraryItems.map((item) => item.category)))

  const filteredCareers = careerLibraryItems.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? career.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="mb-6 text-2xl font-bold">Career Library</h1>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search careers..."
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 min-w-full justify-center">
          <Button className={clsx("px-4 py-2 rounded-md text-black", selectedCategory === null ? "bg-blue-600 text-white" : "bg-gray-200")} onClick={() => setSelectedCategory(null)}>
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              className={clsx("px-4 py-2 rounded-md text-black", selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200")}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCareers.map((career) => (
          <div key={career.id} className="rounded-lg border border-gray-200 shadow-md p-4">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-md">
                <Image src={career.image || "/placeholder.svg"} alt={career.title} width={64} height={64} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{career.title}</h2>
                <p className="text-sm text-gray-500">{career.category}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{career.description}</p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Salary Range:</span>
                <span>{career.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Education:</span>
                <span>{career.education}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Job Outlook:</span>
                <span className="font-medium text-green-600">{career.outlook}</span>
              </div>
            </div>

            <div className="mt-4">
              <Button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md">Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
