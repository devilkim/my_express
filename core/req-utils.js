const httpStatus = require('http-status');
const {result} = require('../core/res-utils');
const {createParameter} = require('./param');

const api = controllerMethod => {
  return (req, res, next) => {
    const request = createParameter(req);
    controllerMethod(request)
      .then(resultObject => {
        next(resultObject);
      })
      .catch(e => {
        next(e);
      });
  };
};

module.exports = {api, createParameter};
