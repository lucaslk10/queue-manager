require('dotenv').config();

const mongo = require('./app/utils/database');

mongo.connectMongo().then(() => {
  const port = process.env.API_PORT || 5000;
  const app = require('./app');

  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
});
