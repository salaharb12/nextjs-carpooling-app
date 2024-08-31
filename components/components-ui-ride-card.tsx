'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react'

interface RideCardProps {
  id: string
  from: string
  to: string
  date: string
  price: number
  seats: number
}

export function RideCard({ id, from, to, date, price, seats }: RideCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{from} to {to}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
          <MapPinIcon className="h-4 w-4" />
          <span>{from} → {to}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
          <UsersIcon className="h-4 w-4" />
          <span>{seats} seats available</span>
        </div>
        <div className="mt-4 text-lg font-semibold">${price}</div>
      </CardContent>
      <CardFooter>
        <Link href={`/rides/${id}`} passHref>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}