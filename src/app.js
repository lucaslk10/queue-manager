const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const BullBoard = require('bull-board');
const Queue = require('./app/lib/Queue');
const cors = require('cors');

const { routes } = require('./routes');
const { scheduleUrlJobs } = require("./app/services/SchedulerService")

scheduleUrlJobs();

BullBoard.setQueues(Queue);
dotenv.config();

const app = express();

app.use(morgan('dev')); 
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/admin/queues', BullBoard.UI);

app.use((error, req, res, _) => {
  // Generic error implementation
  res.status(500).json({ status: 500, message: error.message || error });
});

module.exports = app;
