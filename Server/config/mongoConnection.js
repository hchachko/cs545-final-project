const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
<<<<<<< HEAD
    serverUrl: 'mongodb://127.0.0.1:27017',
    database: 'Hoboken_Parks_Portal'
  }
}
=======
    serverUrl: "mongodb://127.0.0.1/",
    database: "Hoboken_Parks_Portal",
  },
};
>>>>>>> main
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = {
  dbConnection: async () => {
    if (!_connection) {
      _connection = await MongoClient.connect(mongoConfig.serverUrl);
      _db = await _connection.db(mongoConfig.database);
    }

    return _db;
  },
  closeConnection: () => {
    _connection.close();
  },
};
