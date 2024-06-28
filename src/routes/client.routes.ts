import { Router } from 'express';
import { getAllClients, createClient } from '../controllers/client.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticateToken, getAllClients);
router.post('/', authenticateToken, createClient);

export default router;
