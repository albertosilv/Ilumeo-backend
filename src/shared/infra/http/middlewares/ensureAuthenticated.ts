import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { authConfig } from '~configs/auth';
import { AppError } from '~shared/errors/AppError';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;
    const { secret_access_token } = authConfig;

    if (!authHeader) {
        throw new AppError('Invalid header bearer authorization token', 401);
    }

    const { 1: token = '' } = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(token, secret_access_token) as IPayload;

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError('Invalid access_token', 401);
    }
}