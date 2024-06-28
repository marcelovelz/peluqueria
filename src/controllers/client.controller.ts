import { Request, Response } from 'express';
import { Client } from '../connection/connection';

export const getAllClients = async (req: Request, res: Response) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createClient = async (req: Request, res: Response) => {
    try {
        const { identificationNumber, name, lastName, email, phone } = req.body;
        const newClient = await Client.create({
            identificationNumber,
            name,
            lastName,
            email,
            phone,
        });
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente', error });
    }
};
