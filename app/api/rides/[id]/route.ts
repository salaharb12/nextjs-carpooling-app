// app/api/rides/[id]/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/db'
import { ObjectId } from 'mongodb'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    
    const client = await clientPromise
    const db = client.db("carpooling")
    
    const ride = await db.collection("rides").findOne({ _id: new ObjectId(id) })

    if (!ride) {
      return NextResponse.json({ error: 'Ride not found' }, { status: 404 })
    }

    return NextResponse.json(ride)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
      const id = params.id
      const { from, to, date, price, seats } = await req.json()
      
      const client = await clientPromise
      const db = client.db("carpooling")
      
      const result = await db.collection("rides").updateOne(
        { _id: new ObjectId(id) },
        { 
          $set: { 
            from, 
            to, 
            date, 
            price: parseFloat(price), 
            seats: parseInt(seats),
            updatedAt: new Date()
          } 
        }
      )
  
      if (result.matchedCount === 0) {
        return NextResponse.json({ error: 'Ride not found' }, { status: 404 })
      }
  
      return NextResponse.json({ message: 'Ride updated successfully' })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }

  export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
      const id = params.id
      
      const client = await clientPromise
      const db = client.db("carpooling")
      
      const result = await db.collection("rides").deleteOne({ _id: new ObjectId(id) })
  
      if (result.deletedCount === 0) {
        return NextResponse.json({ error: 'Ride not found' }, { status: 404 })
      }
  
      return NextResponse.json({ message: 'Ride deleted successfully' })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }

  