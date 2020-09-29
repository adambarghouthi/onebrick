import jwt from 'jsonwebtoken';

const cleanUser = user => ({
  email: user.email,
  stripe: user.stripe
})

const generateToken = (user) => {
  return jwt.sign({
    id: user.id,
    email: user.email
  }, process.env.JWT_SECRET)
}

const getSession = user => ({
  user: cleanUser(user),
  token: generateToken(user)
})

export default getSession
