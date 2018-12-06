const result = httpStatus => {
  return {
    object(resultObject = {}) {
      return {httpStatus, resultObject};
    },
    message(message = 'Raise error. Refer status code.') {
      return {httpStatus, resultObject: {message}};
    },
  };
};

module.exports = {result};
