const httpStatus = require('http-status');
const {result} = require('./res-utils');
const jwt = require('jsonwebtoken');
const config = require('../config');

const encrypt = (obj, key = config.tokenSecretKey) => {
  return jwt.sign(obj, key);
};

const decrypt = (
  token,
  key = config.tokenSecretKey,
  bearer = config.tokenBearer
) => {
  if (bearer === null || bearer === '') {
    throw result(httpStatus.UNAUTHORIZED).message();
  } else {
    const splitedToken = token.split(' ');
    if (splitedToken.length !== 2)
      throw result(httpStatus.UNAUTHORIZED).message();
    else {
      if (splitedToken[0] !== bearer)
        throw result(httpStatus.UNAUTHORIZED).message();
      else {
        try {
          return jwt.verify(splitedToken[1], key);
        } catch (e) {
          throw result(httpStatus.UNAUTHORIZED).message();
        }
      }
    }
  }
};

module.exports = {encrypt, decrypt};
