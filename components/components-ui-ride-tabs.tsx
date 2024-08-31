'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RideCard } from "./ride-card"

interface Ride {
  id: number
  from: string
  to: string
  date: string
  price: number
  seats: number
}

interface RideTabsProps {
  offeredRides: Ride[]
  bookedRides: Ride[]
}

export function RideTabs({ offeredRides, bookedRides }: RideTabsProps) {
  return (
    <Tabs defaultValue="offered" className="w-full">
      <TabsList>
        <TabsTrigger value="offered">Offered Rides</TabsTrigger>
        <TabsTrigger value="booked">Booked Rides</TabsTrigger>
      </TabsList>
      <TabsContent value="offered">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offeredRides.map((ride) => (
            <RideCard key={ride.id} {...ride} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="booked">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookedRides.map((ride) => (
            <RideCard key={ride.id} {...ride} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}