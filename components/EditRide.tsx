// app/components/EditRide.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getRide, updateRide } from '@/app/lib/api'
import { RideForm } from './components-ui-ride-form'
import { Ride, RideFormData } from '@/app/lib/types'
import { ToastDemo } from './components-ui-toast-provider' 

interface EditRideProps {
  id: string
}

export default function EditRide({ id }: EditRideProps) {
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

  const handleSubmit = async (data: RideFormData) => {
    try {
      await updateRide(id, data)
      router.push(`/rides/${id}`)
    } catch (err) {
      setError('Failed to update ride')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!ride) return <div>Ride not found</div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Ride</h1>
      <RideForm initialData={ride} onSubmit={handleSubmit} />
      <ToastDemo />
    </div>
  )
}