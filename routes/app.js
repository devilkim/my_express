'use strict';
const express = require('express');
const router = express.Router();
const {api} = require('../core/route-utils');
const app = require('../controllers/app');

///doc start
router.get('/item', api(app.geItem));
router.get('/items', api(app.geItems));
router.post('/item', api(app.addItem));
router.put('/item', api(app.editItem));
router.delete('/item', api(app.removeItem));

router.get('/err/403', api(app.error403));
router.get('/err/500', api(app.error500));

router.post('/token', api(app.createToken));
router.get('/token', api(app.token));
///doc end

module.exports = router;
