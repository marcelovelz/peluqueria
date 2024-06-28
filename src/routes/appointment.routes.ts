import { Router } from 'express';
import {
    getAppointmentsByClient,
    createAppointment,
    getAppointments,
} from '../controllers/appointment.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/client/:clientId', authenticateToken, getAppointmentsByClient);
router.post('/', authenticateToken, createAppointment);
router.get('/', getAppointments);

export default router;
