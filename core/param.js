const httpStatus = require('http-status');
const {result} = require('./res-utils');

const createParameter = req => {
  const request = {};
  request.body = parameter(req.body, 'body');
  request.query = parameter(req.query, 'query');
  request.params = parameter(req.params, 'params');
  request.headers = parameter(req.headers, 'headers');
  return request;
};

const parameter = (param, type) => {
  return (key, defaultValue) => {
    if (defaultValue === undefined && param[key] === undefined)
      throw result(httpStatus.BAD_REQUEST).message('{0} 유형의 {1} 파라미터가 필요합니다.'.format(type, key));
    else if (defaultValue !== undefined && param[key] === undefined) return defaultValue;
    else return param[key];
  };
};

module.exports = {parameter, createParameter};
