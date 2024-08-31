'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AppPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Carpooling App</h1>
      <p className="text-xl mb-8 text-center">Find and share rides easily. Save money and reduce your carbon footprint.</p>
      <div className="flex space-x-4">
        <Link href="/rides">
          <Button>Find a Ride</Button>
        </Link>
        <Link href="/rides/create">
          <Button variant="outline">Offer a Ride</Button>
        </Link>
      </div>
    </div>
  )
}