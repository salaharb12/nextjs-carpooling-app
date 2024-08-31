// app/rides/[id]/page.tsx
import RideDetails from "@/components/RideDetails" 

export default function RideDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <RideDetails id={params.id} />
    </div>
  )
}