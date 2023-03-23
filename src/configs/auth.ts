const authConfig = {
    secret_access_token: process.env.SECRET_ACCESS_TOKEN || '',
    expires_in_access_token: process.env.EXPIRES_IN_ACCESS_TOKEN,
};

export { authConfig };