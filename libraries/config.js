require('dotenv').config();

const fs = require('fs');

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbuser: process.env.DB_USER,
  dbpassword: process.env.DB_PASSWORD,
  dbhost: process.env.DB_HOST,
  dbname: process.env.DB_NAME,
  dbport: process.env.DB_PORT,
  emailDomain: process.env.MAIL_DOMAIN,
  emailPass: process.env.MAIL_PASSWORD,
  expPath: process.env.EXP_PATH,
  recibosPath: process.env.RECIBOS_PATH,
  code: process.env.CODE
  /*domain: process.env.DOMAIN,
  imgPath: process.env.IMG_PATH,
  imgPathReq: process.env.IMG_PATH_REQ*/
}

module.exports = { config };
