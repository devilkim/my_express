'use strict';

/** @member {Array} */
const httpStatusConfig = require('../constant/http-status');
/** @member {Object} */
const httpStatus = require('./http-status');
const result = {error: {}, success: {}};

// utils
const Success = function() {};
result.success = Success;

const customSuccess = (code, object) => {
  const success = new Success();
  success.code = code;
  if (object !== null) {
    success.object = object;
  }
  return success;
};
const customError = (code, status, message) => {
  const err = new Error();
  err.code = code;
  err.status = status;
  err.message = message;
  err.custom = true;
  return err;
};

httpStatusConfig
  .filter(item => httpStatus.is2xx(item.code))
  .map(item => {
    result.success[item.name] = (object = null) =>
      customSuccess(item.code, object);
  });
httpStatusConfig
  .filter(item => httpStatus.is4xx(item.code) || httpStatus.is5xx(item.code))
  .map(item => {
    result.error[item.name] = message =>
      customError(
        item.code,
        item.name,
        message === undefined ? item.defaultMessage : message
      );
  });

module.exports = result;
