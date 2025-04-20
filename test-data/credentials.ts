import { User } from '../business/models/user.model';

export const credentials = {
    validUser: {
        username: 'default',
        password: '1q2w3e'
    } as User,

    adminUser: {
        username: 'admin',
        password: 'admin123'
    } as User
};
