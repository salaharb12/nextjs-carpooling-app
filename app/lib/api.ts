// app/lib/api.ts
import { Ride, RideFormData, SearchParams } from "./types"

export async function createRide(rideData: RideFormData) {
  const response = await fetch('/api/rides', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rideData),
  })
  if (!response.ok) throw new Error('Failed to create ride')
  return response.json()
}

export async function getRides(params?: Partial<SearchParams>) {
  const searchParams = new URLSearchParams(params as Record<string, string>)
  const response = await fetch(`/api/rides?${searchParams}`)
  if (!response.ok) throw new Error('Failed to fetch rides')
  return response.json()
}

export async function getRide(id: string) {
  const response = await fetch(`/api/rides/${id}`)
  if (!response.ok) throw new Error('Failed to fetch ride')
  return response.json()
}

export async function updateRide(id: string, rideData: Partial<RideFormData>) {
  const response = await fetch(`/api/rides/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rideData),
  })
  if (!response.ok) throw new Error('Failed to update ride')
  return response.json()
}

export async function deleteRide(id: string) {
  const response = await fetch(`/api/rides/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('Failed to delete ride')
  return response.json()
}

export async function searchRides(params: SearchParams) {
  const searchParams = new URLSearchParams(params as Record<string, string>)
  const response = await fetch(`/api/rides/search?${searchParams}`)
  if (!response.ok) throw new Error('Failed to search rides')
  return response.json()
}

