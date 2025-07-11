const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var validatorHandler = require('./../middlewares/validator.handler');

//Services
var GeneralService = require('./../services/general.service');
var generalService = new GeneralService();

//Schema
var { estudianteSchema } = require('./../schemas/estudiante.schema');

//Fecha actual
var fechaAhora = new Date();

//API encargada de traer el catálogo de estudiantes
router.get('/getEstudiantes', jsonParser, async (req, res) => {
  try{
    var estudiantes = await generalService.getStudents();
    if(estudiantes.error == 1){
      res.status(201).json({
        "data": [],
        "code_status": 400,
        "description_status": "NOT_FOUND",
        "date": fechaAhora,
        "error_detail": estudiantes.detail
      });
    }else{
      res.status(200).json({
        "data": estudiantes.data,
        "code_status": 200,
        "description_status": "SUCCESS",
        "date": fechaAhora,
        "error_detail": ""
      });
    }
  } catch (error) {
    res.status(201).json({
      "data": [],
      "code_status": 500,
      "description_status": "INTERNAL_SERVER_ERROR",
      "date": fechaAhora,
      "detail": error
    });
    console.log({
      "function": "prueba de trabajo: getEstudiantes",
      "date": fechaAhora,
      "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
      "details": error
    });
  }
});

//API encargada de dar de alta un nuevo estudiante
router.post('/altaEstudiante', validatorHandler(estudianteSchema, 'params'), jsonParser, async (req, res) => {
  try{
    const alta = await generalService.addStudent(req.body);
    if(alta.num_error != 0){
      res.status(201).json({
        "data": "",
        "code_status": 400,
        "description_status": "BAD_REQUEST",
        "date": fechaAhora,
        "detalle": alta.detalle
      });
    }else{
      res.status(200).json({
        "data": alta.data,
        "code_status": 200,
        "description_status": "SUCCESS",
        "date": fechaAhora,
        "error_detail": '',
        "detalle": alta.detalle
      });
    }
  } catch (error) {
    res.status(201).json({
      "data": [],
      "code_status": 500,
      "description_status": "INTERNAL_SERVER_ERROR",
      "date": fechaAhora,
      "detalle": error
    });
    console.log({
      "function": "prueba de trabajo: altaEstudiante",
      "date": fechaAhora,
      "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
      "detalle": error
    });
  }
});

//API encargada de modificar un estudiante seleccionado en la tabla
router.post('/editaEstudiante', validatorHandler(estudianteSchema, 'params'), jsonParser, async (req, res) => {
  try{
    const sesion = await generalService.updateStudent(req.body);
    if(sesion.num_error != 0){
        res.status(201).json({
            "data": "",
            "code_status": 400,
            "description_status": "BAD_REQUEST",
            "date": fechaAhora,
            "detalle": sesion.detalle
        });
    }else{
        res.status(200).json({
            "data": sesion.data,
            "code_status": 200,
            "description_status": "SUCCESS",
            "date": fechaAhora,
            "error_detail": '',
            "detalle": sesion.detalle
        });
    }
  } catch (error) {
    res.status(201).json({
        "data": [],
        "code_status": 500,
        "description_status": "INTERNAL_SERVER_ERROR",
        "date": fechaAhora,
        "detalle": error
    });
    console.log({
        "function": "prueba de trabajo: editaEstudiante",
        "date": fechaAhora,
        "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
        "detalle": error
    });
  }
});

//API encargada de eliminar un estudiante de los registros (colocando su status a "BAJA")
router.post('/borraEstudiante', validatorHandler(estudianteSchema, 'params'), jsonParser, async (req, res) => {
  try{
    const sesion = await generalService.deleteStudent(req.body);
    if(sesion.num_error != 0){
        res.status(201).json({
            "data": "",
            "code_status": 400,
            "description_status": "BAD_REQUEST",
            "date": fechaAhora,
            "detalle": sesion.detalle
        });
    }else{
        res.status(200).json({
            "data": sesion.data,
            "code_status": 200,
            "description_status": "SUCCESS",
            "date": fechaAhora,
            "error_detail": '',
            "detalle": sesion.detalle
        });
    }
  } catch (error) {
    res.status(201).json({
        "data": [],
        "code_status": 500,
        "description_status": "INTERNAL_SERVER_ERROR",
        "date": fechaAhora,
        "detalle": error
    });
    console.log({
        "function": "prueba de trabajo: borraEstudiante",
        "date": fechaAhora,
        "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
        "detalle": error
    });
  }
});

module.exports = router;
