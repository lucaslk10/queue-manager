# Queue Manager
Manage new URLs to process from jobs list on DB with Bull & Redis, process them, then stores the http code and updated status.

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

`GET -- /job`

`POST -- /job -- body: { url } `

`GET -- /job/process?id`

`POST -- /job/finalize`

# Screenshots

![Bull Board](https://lucaslk10.github.io/bull-board.PNG)
