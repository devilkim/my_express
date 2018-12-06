const chai = require('chai');
const expect = chai.expect;
const app = require('./app');
const {createParameter} = require('../core/param');

describe('/controllers/app.js', () => {
  const req = {};

  before(() => {
    req.headers = {};
    req.body = {};
    req.query = {};
    req.params = {};
  });
  describe('get /app/item', () => {
    it('400(No parameter)', done => {
      app.addItem(createParameter(req)).catch((err, res) => {
        console.log('#####');
        console.log(err);
        console.log('#####');
        console.log(res);
        console.log('#####');
        expect(err).is.null;
        done();
      });
    });
  });
});

/*
async addItem({body}) {
    const name = body('name');

    const isSuccess = itemManager.addItem(name);

    return success.ok({isSuccess});
  },

  async getItem({query}) {
    const no = query('no');

    const item = itemManager.getItem(parseInt(no, 10));

    return success.ok({item});
  },
 */
