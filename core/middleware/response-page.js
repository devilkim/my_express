'use strict';

const httpStatus = require('http-status');
const {result} = require('../res-utils');

const available = (is_available, alert) => {
  return (req, res, next) => {
    if (is_available) next();
    else
      responseJSON(res, httpStatus.serviceUnavailable, {
        code: httpStatus.SERVICE_UNAVAILABLE,
        message: alert,
      });
  };
};
const responseJSON = (res, statusCode, obj) => {
  res.status(statusCode).send(obj);
};
const json = {
  notFound(req, res, next) {
    next(result.error(httpStatus.NOT_FOUND, 'API가 존재하지 않습니다.'));
  },
  async result(data, req, res, next) {
    let resultHttpStatus = data.httpStatus;
    let resultObject = data.resultObject || {};
    if (data instanceof Error) {
      resultHttpStatus = httpStatus.INTERNAL_SERVER_ERROR;
      resultObject.message = 'Unexpected error.';
      console.log(data);
    } else if (
      data.httpStatus === undefined ||
      !Number.isInteger(data.httpStatus) ||
      httpStatus[data.httpStatus] === undefined
    ) {
      resultHttpStatus = httpStatus.INTERNAL_SERVER_ERROR;
      resultObject.message = 'Unexpected error.';
    }
    responseJSON(res, resultHttpStatus, resultObject);
  },
};

module.exports = {json, available};
