const mongo = require('../utils/database');
const Queue = require('../lib/Queue');
const mongodb = require('mongodb');

class JobsService {
  list = async () => {
    const list = await mongo.db.get('jobs').find();

    return list;
  }

  store = async (data) => {
    const { url } = data;

    const inserted = await mongo.db.get('jobs').insert({
      url,
      http_code: null,
      status: 'NEW',
    });

    return inserted;
  }

  getNewJobs = async () => {
    const newJobs = await mongo.db.get('jobs').find({
      status: 'NEW',
    });

    return newJobs;
  }

  startEnqueue = async () => {
    const dbJobs = await this.getNewJobs();

    if (dbJobs && dbJobs.length) {
      for (const job of dbJobs) {
        Queue.add(job);
      }
    }
  }

  processing = async ({ _id }) =>
    await mongo.db
      .get('jobs')
      .findOneAndUpdate(
        { _id: mongodb.ObjectId(_id) },
        { $set: { status: 'PROCESSING' } }
      );

  finalize = async ({ _id, status, http_code }) =>
    await mongo.db
      .get('jobs')
      .findOneAndUpdate(
        { _id: mongodb.ObjectId(_id) },
        { $set: { status, http_code } }
      );
}

module.exports = new JobsService();
