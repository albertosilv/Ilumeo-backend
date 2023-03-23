import jwt from 'jsonwebtoken';

import { authConfig } from '~configs/auth';

export function createAccessToken(userId: string) {
    const { expires_in_access_token, secret_access_token } = authConfig;

    const accessToken = jwt.sign({}, secret_access_token, {
        subject: userId,
        expiresIn: expires_in_access_token,
    });

    return accessToken;
}