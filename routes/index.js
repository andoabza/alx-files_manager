import { Express } from 'express';
import AppController from '../controllers/AppController';

const injectRoutes = (api) => {
    api.get('/status', AppController.getStatus);
    api.get('/stats', AppController.getStats);
}