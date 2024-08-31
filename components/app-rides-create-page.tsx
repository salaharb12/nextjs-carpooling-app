'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AppRidesCreatePage() {
  const [formData, setFormData] = useState({
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
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    // Reset form or redirect user
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Offer a Ride</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="from" className="block mb-2">From</label>
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
          <label htmlFor="to" className="block mb-2">To</label>
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
          <label htmlFor="date" className="block mb-2">Date</label>
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
          <label htmlFor="price" className="block mb-2">Price</label>
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
          <label htmlFor="seats" className="block mb-2">Available Seats</label>
          <Input
            type="number"
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Offer Ride</Button>
      </form>
    </div>
  )
}