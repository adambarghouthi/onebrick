import jwt from 'jsonwebtoken'
import User from 'models/User'
import mongoose from 'mongoose'

const JWT_SECRET = process.env.JWT_SECRET

const userWithToken = async (token) => {
  const jwtUser = await jwt.verify(token, JWT_SECRET)
  
  const { id } = jwtUser

  const fetchedUser = await User.findById(id)

  return Promise.resolve(fetchedUser)
}

export default userWithToken
