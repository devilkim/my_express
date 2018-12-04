'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {running, alert, middleware, type, port} = require('./config');
const {name, version} = require('./package');
const common = require('./core/common');
const responsePage = require('./core/middleware/response-page');

const app = express();

if (middleware.cors) app.use(cors());
if (type !== 'test') app.use(morgan(middleware.morgan));
app.use(responsePage.available(running, alert));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/app', require('./routes/app.js'));

app.use(responsePage[middleware.resultType].notFound);
app.use(responsePage[middleware.resultType].result);
app.listen(port, () => {
  const startMessage = `The ${name}(${type}) starts at ${port}(${version}).`;
  console.info(startMessage);
});

common.useStringFormat();

module.exports = app;
