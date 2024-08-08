import "dotenv/config"
import mongoose, { connect } from "mongoose"

export default async function DATABASE_CONNECT(): Promise<void> {
    mongoose.set('strictQuery', false)
    const URI = <string>process.env.URI
    await connect(URI)
    
}
