// app/components/SearchRides.tsx
'use client'

import { useState } from 'react'
import { searchRides } from '@/app/lib/api'
import { Ride, SearchParams } from '@/app/lib/types'
import { SearchBar } from './components-ui-search-bar' 
import { RideCard } from './components-ui-ride-card' 
import { RideFilter } from './components-ui-ride-filter' 

export default function SearchRides() {
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (from: string, to: string, date: string) => {
    try {
      setLoading(true)
      const searchParams: SearchParams = { from, to, date }
      const searchedRides = await searchRides(searchParams)
      setRides(searchedRides)
    } catch (err) {
      setError('Failed to search rides')
    } finally {
      setLoading(false)
    }
  }

  const handleFilter = (sortBy: string) => {
    // Implement sorting logic here
    console.log('Sorting by:', sortBy)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RideFilter onFilter={handleFilter} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {rides.map((ride) => (
          <RideCard key={ride.id} {...ride} />
        ))}
      </div>
    </div>
  )
}