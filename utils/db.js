import MongoClient from 'mongodb';

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'files_manager';

class DBClient {
  constructor() {
    this.client = new MongoClient(`mongodb://${host}:${port}/`, { useUnifiedTopology: true }).connect();
    this.client.db(dbName);
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
  return new Promise((resolve, reject) => {
    this.client.db.collection('users').countDocuments({}, (err, count) => {
      if (err) {
        reject(err);
      } else {
        resolve(count);
      }
    });
  });  
  }

  async nbFiles() {
  return new Promise((resolve, reject) => {
    this.client.db.collection('files').countDocuments({}, (err, count) => {
      if (err) {
        reject(err);
      } else {
        resolve(count);
      }
    });
  });
  }
}

export const dbClient = new DBClient();
