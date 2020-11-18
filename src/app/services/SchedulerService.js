var CronJob = require('cron').CronJob;
const jobsService = require('./JobsService');

class ServiceScheduler {
  /**
   * Every one minute, it will check for new jobs and add to the queue,
   * using the 'startEnqueue' function.
   */
  scheduleUrlJobs = () =>
    new CronJob(
      '1 * * * * *',
      () => jobsService.startEnqueue(),
      null,
      true,
      'America/Sao_Paulo'
    );
}

module.exports = new ServiceScheduler();
