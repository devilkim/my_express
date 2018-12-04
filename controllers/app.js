'use strict';

const {success, error} = require('../core/result');
const jsonWebToken = require('../core/json-web-token');
const itemManager = require('../custom_modules/ItemManager');

const controller = {
  async addItem({body}) {
    const name = body('name');

    const isSuccess = itemManager.addItem(name);

    return success.ok({isSuccess});
  },

  async editItem({query, body}) {
    const no = query('no');
    const name = body('name');

    const isSuccess = itemManager.editItem(parseInt(no, 10), name);

    return success.ok({isSuccess});
  },

  async getItem({query}) {
    const no = query('no');

    const item = itemManager.getItem(parseInt(no, 10));

    return success.ok({item});
  },

  async getItems() {
    const items = itemManager.getItems();

    return success.ok({items});
  },

  async removeItem({query}) {
    const no = query('no');

    const isSuccess = itemManager.removeItem(parseInt(no, 10));

    return success.ok({isSuccess});
  },

  async error403() {
    return error.forbidden();
  },

  async error500() {
    adsaff.eee;

    return success.ok({});
  },

  async createToken() {
    const token = jsonWebToken.encrypt({
      member_no: 12392812,
      user_id: 'devilkim36',
    });

    return success.ok({token});
  },

  async token({headers}) {
    const authorization = headers('authorization');
    const tokenInfo = jsonWebToken.decrypt(authorization);

    return success.ok({tokenInfo});
  },
};

module.exports = controller;
