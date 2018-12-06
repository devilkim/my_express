'use strict';

const httpStatus = require('http-status');
const {result} = require('../core/res-utils');
const jsonWebToken = require('../core/json-web-token');
const itemManager = require('../custom_modules/ItemManager');

const controller = {
  async addItem({body}) {
    const name = body('name');

    const isSuccess = itemManager.addItem(name);

    return result(httpStatus.OK).object({isSuccess});
  },

  async editItem({query, body}) {
    const no = query('no');
    const name = body('name');

    const isSuccess = itemManager.editItem(parseInt(no, 10), name);

    return result(httpStatus.OK).object({isSuccess});
  },
  async getItem({query}) {
    const no = query('no');

    const item = itemManager.getItem(parseInt(no, 10));

    return result(httpStatus.OK).object({item});
  },

  async getItems() {
    const items = itemManager.getItems();

    return result(httpStatus.OK).object({items});
  },

  async removeItem({query}) {
    const no = query('no');

    const isSuccess = itemManager.removeItem(parseInt(no, 10));

    return result(httpStatus.OK).object({isSuccess});
  },

  async error403() {
    return result(httpStatus.FORBIDDEN).message();
  },

  async error500() {
    adsaff.eee;

    return result(httpStatus.OK).object();
  },

  async createToken() {
    const token = jsonWebToken.encrypt({
      member_no: 12392812,
      user_id: 'devilkim36',
    });

    return result(httpStatus.OK).object({token});
  },

  async token({headers}) {
    const authorization = headers('authorization');
    const tokenInfo = jsonWebToken.decrypt(authorization);

    return result(httpStatus.OK).object({tokenInfo});
  },
};

module.exports = controller;
