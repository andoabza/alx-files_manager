import { Router } from 'express';
import appController from '../controllers/AppController';

const router = Router();

router.get('/status', appController.getStatus());

router.get('/stats', appController.getStats());

module.exports = router;
