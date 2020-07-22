
// funciones, verbos
// las acciones que el usuario puede ejercer en el sistema

const Koders = require('../models/koder') // ruta relativa
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

// no usar rutas absolutas
// const Koders = require('/Users/charles/code/kodemia/octava-gen/kodemia-api-octava/src/models/koder') // ruta absoluta

function getAll () {
  return Koders.find()
}

function create (koderData) {
  return Koders.create(koderData)
}

async function signup (koderData) {
  const { password } = koderData

  // encriptar la contraseña
  const passwordEncripted = await bcrypt.hash(password)

  return Koders.create({
    ...koderData,
    password: passwordEncripted
  })
}

async function login (email, passwordPlain) {
  // buscar el usuario en la bd
  const koderByEmail = await Koders.findOne({ email })
  if (!koderByEmail) {
    // se ejecuta cuando no hay un koder
    throw new Error('Email not found')
  }

  // verificar que si sea su password
  const isValid = await bcrypt.compare(passwordPlain, koderByEmail.password)
  if (!isValid) {
    throw new Error('Password not valid')
  }

  return jwt.sign({ id: koderByEmail._id })
}

module.exports = {
  getAll,
  create,
  signup,
  login
}
