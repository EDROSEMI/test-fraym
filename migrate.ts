import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from '@/drizzle/schema'
import { Client } from 'pg';

// const client = new Client();
const client = new Client({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DP_PORT),
    user: process.env.DB_USER,
    password: process.env.DP_PASSWORD,
    database: process.env.DB_NAME,
})
client.connect()
const db: PostgresJsDatabase<typeof schema> = drizzle(client, { schema });


const main = async () => {
    console.log('Migrating');
    await migrate(db, { migrationsFolder: './drizzle' })
    console.log('Migration completed');
}

main()
