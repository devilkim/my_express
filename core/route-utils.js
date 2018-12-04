const param = require('./param');

const api = controllerMethod => {
  return (req, res, next) => {
    req.body = param.WrapParam(req.body, 'body');
    req.query = param.WrapParam(req.query, 'query');
    req.params = param.WrapParam(req.params, 'params');
    req.headers = param.WrapParam(req.headers, 'headers');
    controllerMethod(req)
      .then(result => {
        next(result);
      })
      .catch(e => {
        next(e);
      });
  };
};

module.exports = {api};
