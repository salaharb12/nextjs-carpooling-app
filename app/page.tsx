// app/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Carpooling App</h1>
      <div className="space-y-4">
        <Link href="/rides">
          <Button>View All Rides</Button>
        </Link>
        <Link href="/rides/create">
          <Button>Create a Ride</Button>
        </Link>
        <Link href="/rides/search">
          <Button>Search Rides</Button>
        </Link>
      </div>
    </div>
  )
}