import MongoClient from 'mongodb';

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'files_manager';

class DBClient {
  constructor() {
    //this.client = new MongoClient(`mongodb://${host}:${port}/`, { useUnifiedTopology: true }).connect();
    this.client = new MongoClient("cluster0.m0zp7jh.mongodb.net", {useUnifiedTopology: true});
    //this.client.db('dbName');
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const collection = this.client.db.collection('users');
    const count = await collection.countDocuments();
    return count;
  }

  async nbFiles() {
    const collection = this.client.db.collection('files');
    const count = await collection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
export default dbClient;