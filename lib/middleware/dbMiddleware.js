import mongoose from 'mongoose'
import nextConnect from 'next-connect'

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 300000,
  connectTimeoutMS: 30000,
}

async function db (req, res, next) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.DB_URI, dbOptions)
      console.log('Connected to:', process.env.DB_URI)
    }
  } catch (error) {
    return next(error)
  }

  return next()
}

export default db
