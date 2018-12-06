const param = require('./param');

const api = controllerMethod => {
  return (req, res, next) => {
    const request = {};
    request.body = param.WrapParam(req.body, 'body');
    request.query = param.WrapParam(req.query, 'query');
    request.params = param.WrapParam(req.params, 'params');
    request.headers = param.WrapParam(req.headers, 'headers');
    controllerMethod(request)
      .then(result => {
        next(result);
      })
      .catch(e => {
        next(e);
      });
  };
};

module.exports = {api};
