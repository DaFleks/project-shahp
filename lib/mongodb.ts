import mongoose, { Mongoose } from "mongoose"; // Import Mongoose and its types

// Get the MongoDB connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI as string;

// If the URI is missing, throw an error to prevent app crashes
if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in your .env file");

// Define an interface for caching the database connection
interface MongooseCache {
  conn: Mongoose | null; // Holds the active connection or null if not connected
  promise: Promise<Mongoose> | null; // Stores a pending connection promise
}

// Extend the global object to include our custom cache for the database connection
const globalWithMongoose = global as unknown as {
  mongoose?: MongooseCache;
};

// Initialize the cache using the global object to prevent multiple connections in development
const cached: MongooseCache = globalWithMongoose.mongoose || { conn: null, promise: null };

/**
 * Function to connect to MongoDB
 * - Uses a cached connection if available
 * - Prevents multiple connections in development
 */
export async function connectDB(): Promise<Mongoose> {
  // If a cached connection exists, return it
  if (cached.conn) return cached.conn;

  // If no connection exists, create a new one and store the promise
  if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => mongoose);

  // Wait for the connection to be established
  cached.conn = await cached.promise;

  // Store the connection globally to reuse it
  globalWithMongoose.mongoose = cached;

  // Return the database connection
  return cached.conn;
}
