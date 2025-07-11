const fs = require('fs');
const sql = require('mssql');
const { config } = require('./../libraries/config');

//DB
const sqlConfig = require('./../libraries/sqlserver.pool');

//Fecha actual
const fechaAhora = new Date();

class GeneralService {

    constructor(){}

    async getStudents(){
        try{
            await sql.connect(sqlConfig);
            const result = await sql.query`EXEC sp_traer_estudiantes`;
            let objetoEnvio = {
                "data": result.recordset,
                "error": 0,
                "detail": ""
            };
            return objetoEnvio;
          } catch (error) {
            let objetoError = {
                "data": [],
                "error": 1
            };
            console.log({
                "function": "prueba de trabajo: getStudents",
                "date": fechaAhora,
                "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
                "details": error
            });
            return objetoError;
          }
    }

    async addStudent(){
        try{
            await sql.connect(sqlConfig);
            const result = await sql.query(`EXEC sp_alta_estudiante`);
            return result.recordset[0];
        } catch (error) {
            let objetoError = {
                "data": [],
                "error": 1,
                "detail": error
            };
            console.log({
                "function": "prueba de trabajo: addStudent",
                "date": fechaAhora,
                "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
                "details": error
            });
            return objetoError;
        }
    }

    async updateStudent(){
        try{
            await sql.connect(sqlConfig);
            const result = await sql.query(`EXEC sp_modificar_estudiante`);
            return result.recordset[0];
        } catch (error) {
            let objetoError = {
                "data": [],
                "error": 1,
                "detail": error
            };
            console.log({
                "function": "prueba de trabajo: updateStudent",
                "date": fechaAhora,
                "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
                "details": error
            });
            return objetoError;
        }
    }

    async deleteStudent(){
        try{
            await sql.connect(sqlConfig);
            const result = await sql.query(`EXEC sp_baja_estudiante`);
            return result.recordset[0];
        } catch (error) {
            let objetoError = {
                "data": [],
                "error": 1,
                "detail": error
            };
            console.log({
                "function": "prueba de trabajo: deleteStudent",
                "date": fechaAhora,
                "errors": "Error en el servicio. Comuníquece con Servicio al Cliente.",
                "details": error
            });
            return objetoError;
        }
    }

}

module.exports = GeneralService;