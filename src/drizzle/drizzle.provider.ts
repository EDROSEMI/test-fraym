import pg from 'pg'
import { drizzle } from 'drizzle-orm/postgres-js'

export const DrizzleAsyncProvider = "drizzleProvider"

export const drizzleProvider = [
    {
        provide: DrizzleAsyncProvider,
        useFactory: async () => {
            const postgre = new pg.Pool({
                port: parseInt(process.env.DP_PORT),
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            })
            const db = drizzle(postgre)
        }
    }
]