'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const result = require('./core/middleware/result');
const app = express();
const router = express.Router();
const {running, alert, middleware, type, port} = require('./config');
const {name, version} = require('./package');

app.use(result.available(running, alert));
if (middleware.cors) app.use(cors());
if (type !== 'test') app.use(morgan(middleware.morgan));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/app", require("./routes/app.js"));
app.use(result[middleware.result].notFound);
app.use(result[middleware.result].result);
app.listen(port, () => {
	const start_message = `The ${name}(${type}) starts at ${port}(${version}).`;
	console.info(start_message);
});
module.exports = app;
