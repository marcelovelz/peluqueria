import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token is missing' });
    }

    jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        next();
    });
};
