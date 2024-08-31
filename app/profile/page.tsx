import { Button } from '@/components/ui/button'

// This would typically come from an authenticated user session
const user = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  ridesOffered: 5,
  ridesTaken: 3,
}

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
        <p className="mb-2">Email: {user.email}</p>
        <p className="mb-2">Rides Offered: {user.ridesOffered}</p>
        <p className="mb-4">Rides Taken: {user.ridesTaken}</p>
        <Button variant="outline">Edit Profile</Button>
      </div>
    </div>
  )
}