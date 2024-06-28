import { Request, Response } from 'express';
import { Appointment, Client, Service } from '../connection/connection';

export const getAllServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.findAll({
            include: [
                {
                    model: Appointment,
                    include: [Client],
                },
            ],
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createService = async (req: Request, res: Response) => {
    const { description, appointmentId } = req.body;
    try {
        const service = await Service.create({ description, appointmentId });
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getServicesByAppointment = async (req: Request, res: Response) => {
    console.log('getServicesByAppointment');
    const { appointmentId } = req.params;
    try {
        const services = await Service.findAll({ where: { appointmentId } });
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getServicesByClient = async (req: Request, res: Response) => {
    const { clientId } = req.params;
    try {
        const services = await Service.findAll({
            include: [{ model: Appointment, where: { clientId } }],
        });
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
