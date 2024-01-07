import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

export const DrizzleAsyncProvider = "drizzleProvider"


import { Client } from "pg";
import { Injectable } from '@nestjs/common';

@Injectable()
export class DrizzleConnectionProvider {
    private readonly db: PostgresJsDatabase<typeof schema>

    constructor() {
        const client = new Client({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DP_PORT),
            user: process.env.DB_USER,
            password: process.env.DP_PASSWORD,
            database: process.env.DB_NAME,
        });

        client.connect()
        this.db = drizzle(client, { schema })
    }

    getConnection = (): PostgresJsDatabase<typeof schema> => this.db
}


// export const drizzleProvider = {
//     provide: DrizzleAsyncProvider,
//     useFactory: async () => {
//         const postgre = new Pool({
//             port: parseInt(process.env.DP_PORT),
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//         })
//         return drizzle(postgre, { schema })
//     },
//     // exports: [DrizzleAsyncProvider]
// }


