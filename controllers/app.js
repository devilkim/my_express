'use strict';

const {success, error} = require('../core/result');
const {auth, param, parser} = require('../core/params');

const controller = {
  async createItem({query}, res, next) {
    try {
      next(success.ok({}));
    } catch (e) {
      next(e);
    }
  }
}

module.exports  = controller;
