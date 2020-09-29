import CORS from 'cors'

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req, res, next) =>
    middleware(req, res, (result) => {
      next(result)
    })
}

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  CORS({
    // Only allow requests with GET, POST, PUT, DELETE
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: true
  })
)

export default cors
