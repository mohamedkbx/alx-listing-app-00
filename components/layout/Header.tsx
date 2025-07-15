"use client"

import { useState } from "react"
import { Search, Globe } from "lucide-react"
import { ACCOMMODATION_TYPES } from "@/constants"

const Header = () => {
  const [activeType, setActiveType] = useState<string>("")

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top notification bar */}
      <div className="bg-teal-600 text-white text-center py-2 text-sm">
        <span className="flex items-center justify-center gap-2">
          <Globe className="w-4 h-4" />
          Overseas trip? Get the latest information on travel guides
          <button className="bg-white text-teal-600 px-3 py-1 rounded text-xs font-medium ml-2">More info</button>
        </span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-600">alx</h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
              <input
                type="text"
                placeholder="Location"
                className="bg-transparent border-none outline-none flex-1 text-sm"
              />
              <div className="border-l border-gray-300 mx-2 h-4"></div>
              <input
                type="text"
                placeholder="Check in"
                className="bg-transparent border-none outline-none w-20 text-sm"
              />
              <div className="border-l border-gray-300 mx-2 h-4"></div>
              <input
                type="text"
                placeholder="Check out"
                className="bg-transparent border-none outline-none w-20 text-sm"
              />
              <div className="border-l border-gray-300 mx-2 h-4"></div>
              <input
                type="text"
                placeholder="People"
                className="bg-transparent border-none outline-none w-16 text-sm"
              />
              <button className="bg-teal-600 text-white p-2 rounded-full ml-2">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Sign in</button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700">
              Sign up
            </button>
          </div>
        </div>

        {/* Accommodation types */}
        <div className="flex items-center space-x-8 py-4 overflow-x-auto">
          {ACCOMMODATION_TYPES.map((type) => (
            <button
              key={type.name}
              onClick={() => setActiveType(type.name)}
              className={`flex flex-col items-center space-y-1 min-w-0 flex-shrink-0 p-2 rounded-lg transition-colors ${
                activeType === type.name
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="text-xl">{type.icon}</span>
              <span className="text-xs font-medium whitespace-nowrap">{type.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
