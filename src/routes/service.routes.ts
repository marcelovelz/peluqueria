import { Router } from 'express';
import {
    getServicesByClient,
    getAllServices,
    createService,
    getServicesByAppointment,
} from '../controllers/service.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/client/:clientId', authenticateToken, getServicesByClient);
router.get('/', authenticateToken, getAllServices);
router.post('/', authenticateToken, createService);
router.get('/:appointmentId', authenticateToken, getServicesByAppointment);
export default router;
