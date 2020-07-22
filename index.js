
// Este archivo deberia poner la apliación en marcha

// forma corta y mas usada
require('dotenv').config()

// forma larga, casi no se usa
// const dotenv = require('dotenv')
// dotenv.config()


const dbConnect = require('./src/lib/db')
const server = require('./src/server')

dbConnect()
  .then(() => {
    console.log('DB connected')
    
    server.listen(8080, () => {
      console.log('server is listening')
    })
  })
  .catch(error => {
    console.error('Error: ', error)
  })
