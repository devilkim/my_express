'use strict';

const {error} = require('./result');

const condition = {
  contains(value, array) {
    if (array.filter(item => item === value).length === 0)
      throw error.badRequest(
        `파라미터 처리 오류입니다. (${value})을(를) ${JSON.stringify(array)} 중 하나의 값을 입력해주세요.`
      );
  },
  custom(condition, message) {
    if (!condition) {
      throw error.badRequest(message);
    }
  },
  array(value) {
    if (!Array.isArray(value)) throw error.badRequest(`파라미터 처리 오류입니다. 배열만 입력 가능합니다(${value}).`);
  },
  arrays(value) {
    if (Array.isArray(value)) {
      value.map(item => {
        if (!Array.isArray(item)) throw error.badRequest(`파라미터 처리 오류입니다. 배열만 입력 가능합니다(${item}).`);
      });
    } else {
      throw error.badRequest(`파라미터 처리 오류입니다. 잘못된 매개변수입니다(${value}).`);
    }
  },
  number(value, range) {
    if (typeof value !== 'number')
      throw error.badRequest(`파라미터 처리 오류입니다. 숫자만 입력 가능합니다(${value}).`);
    if (range.min !== undefined && range.min !== null && range.min > value)
      throw error.badRequest(`파라미터 처리 오류입니다. (${value}를 ${range.min}이상으로 입력해주세요).`);
    if (range.max !== undefined && range.max !== null && range.max < value)
      throw error.badRequest(`파라미터 처리 오류입니다. (${value}를 ${range.max}이하로 입력해주세요).`);
  },
  string(value, range) {
    if (typeof value !== 'string')
      throw error.badRequest(`파라미터 처리 오류입니다. 문자열만 입력 가능합니다(${value}).`);
    if (range.min !== undefined && range.min !== null && range.min > value.length)
      throw error.badRequest(`파라미터 처리 오류입니다. (${value}를 ${range.min}이상으로 입력해주세요).`);
    if (range.max !== undefined && range.max !== null && range.max < value.length)
      throw error.badRequest(`파라미터 처리 오류입니다. (${value}를 ${range.max}이하로 입력해주세요).`);
  }
};

module.exports = condition;
// module.exports = {
//   condition,
//   parser,
//
//   auth(data, key, isRequired = true) {
//     if (isRequired) {
//       if (data === undefined) throw error.unauthorized(`유효하지 않은 로그인 토큰입니다.`);
//       else if (data[key] === undefined) throw error.unauthorized(`유효하지 않은 로그인 토큰입니다.`);
//       return data[key];
//     } else {
//       if (data === undefined) return null;
//       else if (data[key] === undefined) return null;
//       return data[key];
//     }
//   }
// };
