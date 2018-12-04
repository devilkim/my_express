'use strict';

const httpStatus = {};
const httpStatusConfig = require('../constant/http-status');

httpStatusConfig.map(item => {
  httpStatus[item.name] = item.code;
});
[1, 2, 3, 4, 5].map(item => {
  httpStatus['is' + item + 'xx'] = code => {
    return Math.floor(code / 100) == item;
  };
});

module.exports = httpStatus;
