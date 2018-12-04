'use strict';

const result = require('../result');
const httpStatus = {};
const Success = result.success;

const printErrorParameter = req => {
  console.info("### Error API Parameters List ###");
  if (req.tong !== undefined) console.info("token: " + JSON.stringify(req.tong));
  if (Object.keys(req.params).length !== 0) console.info("params: " + JSON.stringify(req.params));
  if (Object.keys(req.body).length !== 0) console.info("body: " + JSON.stringify(req.body));
  if (Object.keys(req.query).length !== 0) console.info("query: " + JSON.stringify(req.query));
};

const available = (is_available, alert) => {
  return (req, res, next) => {
    if (is_available) next();
    else res.status(httpStatus.serviceUnavailable).send({"code": httpStatus.serviceUnavailable, "message": alert, "custom": true});
  };
};

const json = {
  notFound(req, res, next) {
    next(result.error.notFound());
  },
  async result(data, req, res, next) {
    if (data instanceof Success) {
      res.status(data.code).send(data.object);
    } else {
      var code, message, custom, description;
      if (data instanceof Error) {
        code = data.code || httpStatus.internalServerError;
        custom = data.custom || false;
        message = data.message;
        description = data.stack;
      } else {
        code = httpStatus.internalServerError;
        message = data + '';
        custom = false;
        description = data + '';
      }
      if (!Number.isInteger(code)) code = httpStatus.internalServerError;
      res.status(code).send({code, message, custom});
    }
  }
};

module.exports = {json, available};
