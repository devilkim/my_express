'use strict';

const express = require('express');
const router = express.Router();
const app = require('../controllers/app');

///doc start
router.get('/', app.createItem); // 핑
///doc end

module.exports = router;
