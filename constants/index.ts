import type { PropertyProps } from "@/interfaces"

// Hero background image
export const HERO_BACKGROUND = "/placeholder.svg?height=400&width=800"

// Property accommodation types
export const ACCOMMODATION_TYPES = [
  { name: "Rooms", icon: "🏠" },
  { name: "Mansion", icon: "🏰" },
  { name: "Countryside", icon: "🌾" },
  { name: "Villa", icon: "🏖️" },
  { name: "Treehouse", icon: "🌳" },
  { name: "New", icon: "✨" },
  { name: "Amazing pool", icon: "🏊" },
  { name: "Beach House", icon: "🏖️" },
  { name: "Island", icon: "🏝️" },
  { name: "Camping", icon: "⛺" },
  { name: "Apartment", icon: "🏢" },
  { name: "House", icon: "🏡" },
  { name: "Lakefront", icon: "🏞️" },
  { name: "Farm House", icon: "🚜" },
  { name: "Treehouse", icon: "🌲" },
  { name: "Cabins", icon: "🛖" },
]

// Filter options
export const FILTER_OPTIONS = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay Later",
  "Self Checkin",
  "Instant Book",
]

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "30",
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "",
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "15",
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "20",
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "",
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "10",
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "/placeholder.svg?height=300&width=400",
    discount: "25",
  },
]
