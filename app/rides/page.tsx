// app/rides/page.tsx
import RideList from "@/components/RideList" 

export default function RidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Rides</h1>
      <RideList />
    </div>
  )
}