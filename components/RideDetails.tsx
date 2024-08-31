// app/components/RideDetails.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getRide, deleteRide } from '@/app/lib/api'
import { Ride } from '@/app/lib/types'
import { RideDetails as RideDetailsUI } from './components-ui-ride-details' 
import { Button } from '@/components/ui/button'
import { BookingConfirmation } from './components-ui-booking-confirmation' 

interface RideDetailsProps {
  id: string
}

export default function RideDetails({ id }: RideDetailsProps) {
  const [ride, setRide] = useState<Ride | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchRide = async () => {
      try {
        setLoading(true)
        const fetchedRide = await getRide(id)
        setRide(fetchedRide)
      } catch (err) {
        setError('Failed to fetch ride details')
      } finally {
        setLoading(false)
      }
    }

    fetchRide()
  }, [id])

  const handleDelete = async () => {
    try {
      await deleteRide(id)
      router.push('/rides')
    } catch (err) {
      setError('Failed to delete ride')
    }
  }

  const handleBookRide = async () => {
    // Implement booking logic here
    console.log('Booking ride:', id)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!ride) return <div>Ride not found</div>

  return (
    <div>
      <RideDetailsUI
        from={ride.from}
        to={ride.to}
        date={ride.date}
        price={ride.price}
        seats={ride.seats}
        driver={ride.driver}
        onBookRide={handleBookRide}
      />
      <div className="mt-4 space-x-2">
        <Button onClick={() => router.push(`/rides/edit/${id}`)}>Edit</Button>
        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
      </div>
      <BookingConfirmation rideName={`${ride.from} to ${ride.to}`} onConfirm={handleBookRide} />
    </div>
  )
}