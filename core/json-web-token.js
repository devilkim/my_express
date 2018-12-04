const jwt = require('jsonwebtoken');
const config = require('../config');
const {error} = require('./result');

const encrypt = (obj, key = config.tokenSecretKey) => {
  return jwt.sign(obj, key);
};

const decrypt = (
  token,
  key = config.tokenSecretKey,
  bearer = config.tokenBearer
) => {
  if (bearer === null || bearer === '') {
    throw error.unauthorized('유효하지 않은 토큰입니다.');
  } else {
    const splitedToken = token.split(' ');
    if (splitedToken.length !== 2)
      throw error.unauthorized('유효하지 않은 토큰입니다.');
    else {
      if (splitedToken[0] !== bearer)
        throw error.unauthorized('유효하지 않은 토큰입니다.');
      else {
        try {
          return jwt.verify(splitedToken[1], key);
        } catch (e) {
          throw error.unauthorized('유효하지 않은 토큰입니다.');
        }
      }
    }
  }
};

module.exports = {encrypt, decrypt};
