// import { express } from 'express';
import { Router } from 'express';
import { getStats, getStatus } from '../controllers/AppController.js';

export const router = Router();

router.get('/status', getStatus());

router.get('/stats', getStats());
