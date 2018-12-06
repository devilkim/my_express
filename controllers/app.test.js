const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
chai.use(chaiHttp);

const test = ()

describe('/controllers/app.js', () => {
  describe('ping', () => {
    it('200', done => {
      chai
        .request(app)
        .get('/app/item')
        .end((err, res) => {
          expect(err).is.null;
          expect(res).have.status(200);
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
