import { redisClient } from '../utils/redis';
import { dbClient } from '../utils/db';

const getStatus = async (req, res) => {
 try {
    const redisStatus = await redisClient.isRedisAlive();
    const dbStatus = await dbClient.isDbAlive();
    res.status(200).json({ redis: redisStatus, db: dbStatus });
 } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
 }
};

const getStats = async (req, res) => {
 try {
    const usersCount = await dbClient.countUsers();
    const filesCount = await dbClient.countFiles();
    res.status(200).json({ users: usersCount, files: filesCount });
 } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
 }
};

export default { getStatus, getStats };