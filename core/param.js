const {error} = require('./result');

const WrapParam = (param, type) => {
  return (key, defaultValue) => {
    if (defaultValue === undefined && param[key] === undefined)
      throw error.badRequest(
        '{0} 유형의 {1} 파라미터가 필요합니다.'.format(type, key)
      );
    else if (defaultValue !== undefined && param[key] === undefined)
      return defaultValue;
    else return param[key];
  };
};

module.exports = {WrapParam};
