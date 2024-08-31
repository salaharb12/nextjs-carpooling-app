'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface RideFormProps {
  initialData?: {
    from: string
    to: string
    date: string
    price: string
    seats: string
  }
  onSubmit: (data: { from: string; to: string; date: string; price: string; seats: string }) => void
}

export function RideForm({ initialData, onSubmit }: RideFormProps) {
  const [formData, setFormData] = useState(initialData || {
    from: '',
    to: '',
    date: '',
    price: '',
    seats: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? 'Edit Ride' : 'Offer a Ride'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
            <Input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <Input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="seats" className="block text-sm font-medium text-gray-700">Available Seats</label>
            <Input
              type="number"
              id="seats"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">{initialData ? 'Update Ride' : 'Offer Ride'}</Button>
        </CardFooter>
      </form>
    </Card>
  )
}