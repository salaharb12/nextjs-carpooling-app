// app/rides/edit/[id]/page.tsx
import EditRide from "@/components/EditRide" 

export default function EditRidePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <EditRide id={params.id} />
    </div>
  )
}