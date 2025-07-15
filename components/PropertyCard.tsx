import type React from "react"
import type { PropertyProps } from "@/interfaces"
import { Star, Users, Bath, Bed } from "lucide-react"
import Image from "next/image"

interface PropertyCardProps {
  property: PropertyProps
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, address, rating, category, price, offers, image, discount } = property

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />

        {/* Discount badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            {discount}% OFF
          </div>
        )}

        {/* Category tags */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1">
          {category.slice(0, 2).map((cat, index) => (
            <span key={index} className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
              {cat}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center bg-white/90 px-2 py-1 rounded">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs font-medium ml-1">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {address.city}, {address.country}
        </p>

        {/* Property details */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Bed className="w-3 h-3" />
            <span>{offers.bed}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3 h-3" />
            <span>{offers.shower}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{offers.occupants}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 ml-1">/night</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
