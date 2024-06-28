import { Sequelize } from 'sequelize-typescript';
import User from '../models/user.model';
import Service from '../models/service.model';
import Appointment from '../models/appoinment.model';
import Client from '../models/client.model';
import dotenv from 'dotenv';

dotenv.config();

export const connection = new Sequelize({
    dialect:
        (process.env.DB_DIALECT as
            | 'mysql'
            | 'postgres'
            | 'sqlite'
            | 'mariadb'
            | 'mssql'
            | undefined) || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'peluqueria-anita',
    logging: process.env.DB_LOGGING === 'true',
    models: [Client, Appointment, Service, User],
});

async function connectionDB() {
    try {
        console.log('PROCESS: ', process.env.DB_HOST);
        await connection.sync({ alter: true });
    } catch (error) {
        console.log(error);
    }
}

export { connectionDB, Client, Appointment, Service, User };
