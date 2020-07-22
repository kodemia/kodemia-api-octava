
// este archivo es la definicion del servidor

const express = require('express')
const cors = require('cors')

const app = express()

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')

app.use(cors())
app.use(express.json())

// middleware a nivel de applicacion
// app.use(function (request, response, next))
// app.use(...function) recibe una o mas fucniones

app.use((request, response, next) => {
  console.log('Middleware de aplicación: ', request.charles)
  next()
}, (request, response, next) => {
  console.log('middleware 2')
  request.charles = 'hola soy charles'
  next()
}, (request, response, next) => {
  console.log('middleware 3: ', request.charles)
  next()
})

// montando el router de koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)


app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Kodemia APIv8'
  })
})

module.exports = app
