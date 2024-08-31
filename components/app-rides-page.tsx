'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from an API or database
const rides = [
  { id: 1, from: 'New York', to: 'Boston', date: '2023-12-01', price: 30 },
  { id: 2, from: 'Los Angeles', to: 'San Francisco', date: '2023-12-02', price: 40 },
  { id: 3, from: 'Chicago', to: 'Detroit', date: '2023-12-03', price: 25 },
]

export function AppRidesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Rides</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rides.map((ride) => (
          <div key={ride.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{ride.from} to {ride.to}</h2>
            <p className="mb-2">Date: {ride.date}</p>
            <p className="mb-4">Price: ${ride.price}</p>
            <Link href={`/rides/${ride.id}`}>
              <Button variant="outline">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}