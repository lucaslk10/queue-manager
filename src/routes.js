const { post_job, get_job_process, post_job_finalize } = require("./app/middlewares/validations/JobsController.validation")

const jobsController = require('./app/controllers/JobsController');
const routes = require('express').Router();

routes.get('/job', jobsController.list);
routes.post('/job', post_job, jobsController.store);

routes.get('/job/process', get_job_process, jobsController.process);
routes.post('/job/finalize', post_job_finalize, jobsController.finalize);

routes.get('/job/forceQueue', jobsController.forceQueue);

module.exports.routes = routes;
