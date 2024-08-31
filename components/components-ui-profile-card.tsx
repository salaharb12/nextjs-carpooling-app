'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserAvatar } from "./user-avatar"

interface ProfileCardProps {
  name: string
  email: string
  image?: string
  ridesOffered: number
  ridesTaken: number
  onEditProfile: () => void
}

export function ProfileCard({ name, email, image, ridesOffered, ridesTaken, onEditProfile }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <UserAvatar name={name} image={image} />
          <div>
            <CardTitle>{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium">Rides Offered</p>
            <p className="text-2xl font-bold">{ridesOffered}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Rides Taken</p>
            <p className="text-2xl font-bold">{ridesTaken}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onEditProfile} variant="outline" className="w-full">Edit Profile</Button>
      </CardFooter>
    </Card>
  )
}