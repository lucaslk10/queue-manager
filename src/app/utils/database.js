const monk = require('monk');
let _db;

module.exports = {
  connectMongo() {
    return new Promise((resolve, reject) => {
      monk(process.env.DB_MONGO_URI)
        .then((res) => {
          _db = res;
          console.log('MongoDB connected');
          resolve();
        })
        .catch((err) => reject(err));
    });
  },
  get db() {
    return _db;
  },
};
