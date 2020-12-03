# Jobs Processor (URLs Processor)
Manage new URLs to process from jobs list on DB, process them, then stores the http code and updated status, all using concurrency worker. 

# Technologies
- Bull & Redis DB
- Bull-board
- Express
- Monk (MongoDB)
- Morgan
- Cron
- Axios
- Dotenv

# To dos
- Use worker threads.
- Use postgre, with sequencial ID to performatic pagination.
- Performatic Pagination 'WHERE ID >= 59999 AND ID =< 60011'
- Classic Pagination with 'SKIP/OFFSET/LIMIT' (For comparison purposes only).
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
