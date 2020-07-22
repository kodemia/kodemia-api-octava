
const express = require('express')

const router = express.Router()
// un router es un conjunto o subconjunto de rutas
// funciona basicamente como lo hace app

const koders = require('../usecases/koders')
const auth = require('../middlewares/auth')

router.use((request, response, next) => {
  console.log('middleware router koders', request.charles)
  next()
}, (request, response, next) => {
  console.log('middleware router koders 2')
  next()
})

// localhost:8080/koders
router.get('/', (request, response, next) => {
  console.log('middleware de endpoint GET Koders')
  next()
},
async (request, response) => {
  try {
    const allKoders = await koders.getAll()

    response.json({
      succcess: true,
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', auth, async (request, response) => {
  try {
    console.log('koder: ', request.koder)

    const newKodersData = request.body
  
    const newKoder = await koders.create(newKodersData)
  
    response.json({
      success: true,
      data: {
        newKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
