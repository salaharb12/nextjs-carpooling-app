'use client'

import { Button } from '@/components/ui/button'

// This would typically come from an API or database based on the ID
const ride = {
  id: 1,
  from: 'New York',
  to: 'Boston',
  date: '2023-12-01',
  price: 30,
  driver: 'John Doe',
  seats: 3,
}

export function AppRidesIdPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ride Details</h1>
      <div className="border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">{ride.from} to {ride.to}</h2>
        <p className="mb-2">Date: {ride.date}</p>
        <p className="mb-2">Price: ${ride.price}</p>
        <p className="mb-2">Driver: {ride.driver}</p>
        <p className="mb-4">Available Seats: {ride.seats}</p>
        <Button>Book This Ride</Button>
      </div>
    </div>
  )
}