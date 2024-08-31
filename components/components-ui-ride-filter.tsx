'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface RideFilterProps {
  onFilter: (sortBy: string) => void
}

export function RideFilter({ onFilter }: RideFilterProps) {
  const [sortBy, setSortBy] = useState('')

  const handleFilter = () => {
    onFilter(sortBy)
  }

  return (
    <div className="flex items-center space-x-2">
      <Select onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price_asc">Price: Low to High</SelectItem>
          <SelectItem value="price_desc">Price: High to Low</SelectItem>
          <SelectItem value="date_asc">Date: Earliest First</SelectItem>
          <SelectItem value="date_desc">Date: Latest First</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleFilter}>Apply Filter</Button>
    </div>
  )
}