// app/rides/search/page.tsx
import SearchRides from "@/components/SearchRides" 

export default function SearchRidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Rides</h1>
      <SearchRides />
    </div>
  )
}