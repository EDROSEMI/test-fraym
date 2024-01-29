import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from '@/drizzle/schema'
import { Client, Pool } from 'pg';

const client = new Client({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})
client.connect()
const db: NodePgDatabase<typeof schema> = drizzle(client, { schema });


const main = async () => {
    console.log('Migrating');
    await migrate(db, { migrationsFolder: './drizzle' })
    console.log('Migration completed');
}

main()
