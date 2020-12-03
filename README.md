# Jobs Processor (URLs Processor)
Manage new URLs to process from jobs list on DB, process them, then stores the http code and updated status, all using concurrency worker. 

# Technologies and libs
- Bull & Redis DB: To efficiently manage queues, with concurrency on the same process, or even multiple processes.
- Bull-board: For easily check our queue, and rerun failed process. (You can acess running locally `localhost:3333/admin/queues` - Check screenshots below)
- Express: For manage our HTTP calls.
- Monk (MongoDB): For provide mongodb connection and APIs easily, and also, store the jobs.
- Morgan: For logging application.
- Cron: For schedule a checking on the DB and add jobs to the queue.
- Axios: For abstracted HTTP client.
- Dotenv: For env variables.

# To dos
- Use worker threads.
- Use postgre instead, with sequencial ID to performatic pagination.
- Performatic Pagination 'WHERE ID >= 59999 AND ID =< 60011'
- Classic Pagination with 'SKIP/OFFSET/LIMIT' (For comparation purposes only).
- Insert 100.000.000 registers at Postgre and compare pagination.

# Running
`yarn install`

`yarn dev:server`

`yarn dev:queue` Runs the queue processor. Also, you can run how much processes you want.

# Routes

`GET -- /job -- Get job list`

`POST -- /job -- Post a new job -- payload: { url } `

`POST -- /job/forceQueue -- Force check for new jobs on DB, and add them to the queue. It will be good for dev only.`

`GET -- /job/process?id -- When a job starts, update status as 'processing' on DB, through this route.`

`POST -- /job/finalize -- When a job finalize, stores the results on DB passing to this route. -- payload: { http_code, status, _id }`

# Screenshots

![Bull Board](https://lucaslk10.github.io/bull-board.PNG)
