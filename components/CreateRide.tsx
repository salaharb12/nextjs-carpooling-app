// app/components/CreateRide.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createRide } from '@/app/lib/api'
import { RideForm } from './components-ui-ride-form' 
import { RideFormData } from '@/app/lib/types'
import { ToastDemo } from './components-ui-toast-provider' 

export default function CreateRide() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (data: RideFormData) => {
    try {
      await createRide(data)
      router.push('/rides')
    } catch (err) {
      setError('Failed to create ride')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create a New Ride</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <RideForm onSubmit={handleSubmit} />
      <ToastDemo />
    </div>
  )
}