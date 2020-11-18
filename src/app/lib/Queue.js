const Queue = require('bull');
const UrlData = require('../jobs/UrlData');
const redisConfig = require('../../config/redis');

/** 
 * Our queue that process URLs.
 */
const urlFetchQueue = new Queue(UrlData.key, redisConfig);

module.exports = urlFetchQueue;