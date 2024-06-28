import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectionDB } from './connection/connection';
import clientRoutes from './routes/client.routes';
import appointmentRoutes from './routes/appointment.routes';
import serviceRoutes from './routes/service.routes';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

//--config
app.set('port', process.env.PORT || 3001);

//--middleswares
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

//--routes
app.use('/clients', clientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/services', serviceRoutes);
app.use('/users', userRoutes);
//-conexion
connectionDB();

export default app;
