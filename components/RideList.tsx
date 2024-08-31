// app/components/RideList.tsx
'use client'

import { useState, useEffect } from 'react'
import { getRides } from '@/app/lib/api'
import { Ride } from '@/app/lib/types'
import { RideCard } from './components-ui-ride-card' 
import { SearchBar } from './components-ui-search-bar' 

export default function RideList() {
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRides = async (searchParams?: { from?: string; to?: string; date?: string }) => {
    try {
      setLoading(true)
      const fetchedRides = await getRides(searchParams)
      setRides(fetchedRides)
    } catch (err) {
      setError('Failed to fetch rides')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRides()
  }, [])

  const handleSearch = (from: string, to: string, date: string) => {
    fetchRides({ from, to, date })
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {rides.map((ride) => (
          <RideCard key={ride.id} {...ride} />
        ))}
      </div>
    </div>
  )
}