const AppError = require('../../utils/appError');
module.exports = {
  post_job(req, res, next) {
    const { url } = req.body;

    if (!url || typeof url !== 'string')
      throw new AppError(
        "You must provide an valid url. Check the 'URL' parameter."
      );

    next();
  },
  get_job_process(req, res, next) {
    const { id } = req.query;

    if (!id)
      throw new AppError("You must provide an ID. Check the 'ID' parameter.");

    next();
  },
  post_job_finalize(req, res, next) {
    const { http_code, status, _id } = req.body;

    if (!http_code)
      throw new AppError(
        "Check the 'http_code' parameter. You must provide an valid 'http_code'."
      );

    if (!status)
      throw new AppError(
        "Check the 'status' parameter. You must provide an valid 'status'."
      );

    if (!_id)
      throw new AppError(
        "Check the '_id' parameter. You must provide an valid '_id'."
      );

    next();
  },
};
