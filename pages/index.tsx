"use client"

import { useState } from "react"
import Image from "next/image"
import { Filter, ChevronDown } from "lucide-react"
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS, HERO_BACKGROUND } from "@/constants"
import PropertyCard from "@/components/PropertyCard"
import Pill from "@/components/ui/Pill"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [sortBy, setSortBy] = useState("Highest Price")
  const [showMore, setShowMore] = useState(false)

  const displayedProperties = showMore ? PROPERTYLISTINGSAMPLE : PROPERTYLISTINGSAMPLE.slice(0, 8)

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Top Villa") return property.category.includes("Villa") || property.name.includes("Villa")
    if (activeFilter === "Self Checkin") return property.category.includes("Self Checkin")
    if (activeFilter === "Free Reschedule") return property.category.includes("Free Reschedule")
    return true
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={HERO_BACKGROUND || "/placeholder.svg"}
            alt="Beautiful mountain landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl opacity-90">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          {/* Sort and Filter Controls */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm font-medium">{sortBy}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Property Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {displayedProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        {/* Show More Button */}
        {!showMore && PROPERTYLISTINGSAMPLE.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(true)}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Show more
            </button>
            <p className="text-sm text-gray-600 mt-2">Click to see more listings</p>
          </div>
        )}
      </section>
    </div>
  )
}
