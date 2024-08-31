'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, DollarSignIcon } from 'lucide-react'
import { UserAvatar } from "./components-ui-user-avatar" 

interface RideDetailsProps {
  from: string
  to: string
  date: string
  price: number
  seats: number
  driver: {
    name: string
    image?: string
  }
  onBookRide: () => void
}

export function RideDetails({ from, to, date, price, seats, driver, onBookRide }: RideDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{from} to {to}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <UserAvatar name="name" image="image" />
          <div>
            <div className="font-semibold">name</div>
            <div className="text-sm text-muted-foreground">Driver</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-5 w-5 text-muted-foreground" />
            <span>{from} → {to}</span>
          </div>
          <div className="flex items-center space-x-2">
            <UsersIcon className="h-5 w-5 text-muted-foreground" />
            <span>{seats} seats available</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSignIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-lg font-semibold">${price} per seat</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onBookRide} className="w-full">Book this ride</Button>
      </CardFooter>
    </Card>
  )
}