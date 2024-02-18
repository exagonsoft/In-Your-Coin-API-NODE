import { PrismaClient } from '@prisma/client/index';
import { DBConnection } from '../settings/connection_setings.mjs';

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DBConnection().DB_URL
        }
    },
    log: [
        {
            emit: 'stdout',
            level: 'error'
        },
    ]
});

export default prisma;