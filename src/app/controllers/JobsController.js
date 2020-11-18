const jobsService = require('../services/JobsService');

class JobsController {
  /** Get all jobs */
  async list(req, res) {
    const list = await jobsService.list();

    res.status(200).json(list);
  }

  /** Store a new url to process */
  async store(req, res) {
    const inserted = await jobsService.store({ url: req.body.url });

    res.status(200).json(inserted);
  }

  /** Called on the worker to set job status as 'processing' on DB */
  async process(req, res) {
    await jobsService.processing({ id: req.query.id });

    res.status(200).json({});
  }

  /** Called on the worker to set the results after process on DB */
  async finalize(req, res) {
    const { _id, status, http_code } = req.body;

    await jobsService.finalize({ _id, status, http_code });

    res.status(200).json({});
  }

  /** only for tests purposal, force enqueue all status 'new' on DB */
  async forceQueue(req, res) {
    await jobsService.startEnqueue();

    res.status(200).json({});
  }
}

module.exports = new JobsController();
