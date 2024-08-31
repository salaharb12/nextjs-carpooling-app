// app/lib/db.ts
import { MongoClient } from 'mongodb'
import { Db } from 'mongodb'
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>
}

declare const global: GlobalWithMongo

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
let cachedDb: Db | null = null

export async function getDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb
  }

  const client = await clientPromise
  const db = client.db()
  cachedDb = db
  return db
}