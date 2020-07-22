
const jwt = require('../lib/jwt')
const Koder = require('../models/koder')

async function auth(request, response, next) {
  // Todas las llamadas deberian tener un header Authorization con un token

  try {
    const { authorization } = request.headers
    console.log('auth: ', authorization)
    const decodedToken = jwt.verify(authorization)
    console.log('decoded token: ', decodedToken)
    const koder = await Koder.findById(decodedToken.id)
    request.koder = koder
    next()
  } catch (error) {

    response.json({
      success: false,
      error: error.message
    })
  }
}

module.exports = auth
