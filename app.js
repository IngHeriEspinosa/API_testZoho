const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');

const managerTiketsRouter = require('./routes/managerTickets.routes');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(xss());
app.use(hpp());

app.use('/api/v1/tickets', managerTiketsRouter);

app.use(globalErrorHandler);

module.exports = app;
