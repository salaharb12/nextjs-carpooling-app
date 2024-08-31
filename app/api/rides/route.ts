// app/api/rides/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/db'

export async function POST(req: Request) {
  try {
    const { from, to, date, price, seats, driverId } = await req.json()
    
    const client = await clientPromise
    const db = client.db("carpooling")
    
    const result = await db.collection("rides").insertOne({
      from,
      to,
      date,
      price: parseFloat(price),
      seats: parseInt(seats),
      driverId,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return NextResponse.json({ id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET(req: Request) {
    try {
      const { searchParams } = new URL(req.url)
      const from = searchParams.get('from')
      const to = searchParams.get('to')
      const date = searchParams.get('date')
  
      const client = await clientPromise
      const db = client.db("carpooling")
      
      let query: any = {}
      if (from) query.from = { $regex: from, $options: 'i' }
      if (to) query.to = { $regex: to, $options: 'i' }
      if (date) query.date = date
  
      const rides = await db.collection("rides").find(query).toArray()
  
      return NextResponse.json(rides)
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }