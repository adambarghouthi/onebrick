import nextConnect from 'next-connect'
import db from './dbMiddleware'
import cors from './corsMiddleware'

const middleware = nextConnect()

middleware.use(cors).use(db)

export default middleware