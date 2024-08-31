// app/api/rides/search/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const date = searchParams.get('date')
    const minSeats = searchParams.get('minSeats')

    const client = await clientPromise
    const db = client.db("carpooling")
    
    let query: any = {}
    if (from) query.from = { $regex: from, $options: 'i' }
    if (to) query.to = { $regex: to, $options: 'i' }
    if (date) query.date = date
    if (minSeats) query.seats = { $gte: parseInt(minSeats) }

    const rides = await db.collection("rides")
      .find(query)
      .sort({ date: 1, price: 1 })
      .limit(20)
      .toArray()

    return NextResponse.json(rides)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}