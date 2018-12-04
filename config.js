'use strict';

const dotenv = require('dotenv');

if (process.env.NODE_SERVER_TYPE === undefined) dotenv.config();

module.exports = {
  running: (process.env.NODE_SERVER_RUNNING || 'on').toLowerCase() === 'on',
  alert: process.env.NODE_SERVER_ALERT || '서버 업데이트 중입니다. 잠시 후에 다시 시도해주세요.',
  type: process.env.NODE_SERVER_TYPE || 'development', // development, test, production
  port: process.env.NODE_SERVER_PORT || 8011,

  tokenSecretkey: process.env.TOKEN_SECRET_KEY || 'j50n web t0ken !',
  tokenBearer: process.env.TOKEN_BEARER || 'j50n web t0ken !',

  middleware: {
    cors: true,
    morgan: ':date[iso] :status :method :url :response-time ms :res[content-length] bytes',
    resultType: 'json' // json
  }
};
