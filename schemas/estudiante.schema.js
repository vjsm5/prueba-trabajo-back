const Joi = require('joi');

const id_estudiante = Joi.number();
const nombre = Joi.string();
const edad = Joi.number();
const genero = Joi.date();
const status = Joi.number();

const estudianteSchema = Joi.object({
    id_estudiante: id_estudiante,
    nombre: nombre,
    edad: edad,
    genero: genero,
    status: status
});

module.exports = { estudianteSchema }
