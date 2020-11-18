# Jobs Processor
Manage new jobs from DB, process them, then stores the result using concurrency worker.

# Technologies and libs
- Bull & Redis DB: To efficiently manage queues, with concurrency on the same process, or even multiple processes.
- Bull-board: For easily check our queue.
- Express: For manage our HTTP calls.
- Monk (MongoDB): For provide mongodb connection and APIs easily, and also, store the jobs.
- Morgan: For logging application.
- Cron: For schedule a checking on the DB and add jobs to the queue.
- Axios: For abstracted HTTP client.
- Dotenv: For env variables.

# Routes

GET -- /job -- Get job list
POST -- /job -- `{ url }` -- Post a new job 

POST -- /job/forceQueue -- Force check for new jobs on DB, and add them to the queue. It will be good for dev only.

GET -- /job/process?id -- When a job starts, set it as processing on DB, through this route.
POST -- /job/finalize `{ http_code, status, _id }` -- When a job finalize, set the results on DB passing to this route.
