import { Request, Response } from 'express';
import { Appointment, Client } from '../connection/connection';

export const getAppointmentsByClient = async (req: Request, res: Response) => {
    const { clientId } = req.params;
    try {
        const appointments = await Appointment.findAll({ where: { clientId } });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createAppointment = async (req: Request, res: Response) => {
    const { date, clientId } = req.body;
    try {
        const appointment = await Appointment.create({ date, clientId });
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await Appointment.findAll({
            include: [
                {
                    model: Client,
                    attributes: ['id', 'name', 'lastName'],
                },
            ],
        });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
