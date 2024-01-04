import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

export const DrizzleAsyncProvider = "drizzleProvider"

export const drizzleProvider = [
    {
        provide: DrizzleAsyncProvider,
        useFactory: async () => {
            const postgre = new Pool({
                port: parseInt(process.env.DP_PORT),
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            })
            return drizzle(postgre, { schema })
        },
        exports: [DrizzleAsyncProvider]
    }
]