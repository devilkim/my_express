'use strict';

module.exports = {
  running: process.env.NODE_SERVER_RUNNING.toLowerCase() === 'on',
  alert: process.env.NODE_SERVER_ALERT,
  type: process.env.NODE_SERVER_TYPE, // development, test, production
  port: process.env.NODE_SERVER_PORT,

  tokenSecretKey: process.env.TOKEN_SECRET_KEY,
  tokenBearer: process.env.TOKEN_BEARER,

  middleware: {
    cors: true,
    morgan: ':date[iso] :status :method :url :response-time ms :res[content-length] bytes',
    resultType: 'json', // json
  },
};
