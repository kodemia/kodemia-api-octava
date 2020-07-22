
const express = require('express')

const router = express.Router()
// un router es un conjunto o subconjunto de rutas
// funciona basicamente como lo hace app

const mentors = require('../usecases/mentors')


// localhost:8080/koders
router.get('/', async (request, response) => {
  try {
    const allMentors = await mentors.getAll()

    response.json({
      succcess: true,
      data: {
        mentors: allMentors
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

router.post('/', async (request, response) => {
  try {
    const newMentorData = request.body
  
    const newMentor = await mentors.create(newMentorData)
  
    response.json({
      success: true,
      data: {
        newMentor
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
