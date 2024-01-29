import * as schema from './schema'

export const DrizzleAsyncProvider = "drizzleProvider"


import { Pool } from "pg";
import { Injectable } from '@nestjs/common';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';


@Injectable()
export class DrizzleConnectionProvider {
    private readonly db: NodePgDatabase<typeof schema>

    constructor() {
        const pool = new Pool({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        this.db = drizzle(pool, { schema })

        console.log('in constructor :', Object.keys(this.db));
    }

    getConnection = (): NodePgDatabase<typeof schema> => this.db
}

