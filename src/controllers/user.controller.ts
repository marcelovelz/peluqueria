import { Request, Response } from 'express';
import { User } from '../connection/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const createUser = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            password: hashedPassword,
            role,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res
                .status(401)
                .json({ error: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ error: 'Invalid username or password' });
        }
        const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
