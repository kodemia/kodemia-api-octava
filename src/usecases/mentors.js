
// funciones, verbos
// las acciones que el usuario puede ejercer en el sistema

const Mentors = require('../models/mentors') // ruta relativa

// no usar rutas absolutas
// const Koders = require('/Users/charles/code/kodemia/octava-gen/kodemia-api-octava/src/models/koder') // ruta absoluta

function getAll () {
  return Mentors.find()
}

function create (koderData) {
  return Mentors.create(koderData)
}

module.exports = {
  getAll,
  create
}
