'use strict';
const express = require('express');
const {api} = require('../core/req-utils');
const app = require('../controllers/app');
const router = express.Router();

///doc start
router.get('/item', api(app.getItem));
router.get('/items', api(app.getItems));
router.post('/item', api(app.addItem));
router.put('/item', api(app.editItem));
router.delete('/item', api(app.removeItem));

router.get('/err/403', api(app.error403));
router.get('/err/500', api(app.error500));

router.post('/token', api(app.createToken));
router.get('/token', api(app.token));
///doc end

module.exports = router;
