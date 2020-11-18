require("dotenv").config();

const Queue = require("./app/lib/Queue");
const UrlData = require("./app/jobs/UrlData");

// 4 concurrency per process.
Queue.process(4 /** concurrency */, UrlData.handle);

Queue.on('failed', (job,err) => {
 /** 
  *  more complex error handling goes here, like sentry, custom loggers, also,
  *  has the bull board to check for errors at localhost:3333/admin/queues 
  * */
 console.log('Job Failed', job.name, job.data, err)
})