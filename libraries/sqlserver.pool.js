const { config } = require('./../libraries/config');

const sqlConfig = {
  user: config.dbuser,
  password: config.dbpassword,
  database: config.dbname,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

module.exports = sqlConfig;
