// accounts.service.ts
import { DrizzleConnectionProvider } from '@/drizzle/drizzle.provider';
import { Inject, Injectable } from '@nestjs/common';
import * as schema from '@/drizzle/schema'
import { NodePgDatabase, NodePgDriver } from 'drizzle-orm/node-postgres';

@Injectable()
export class AccountsService {
    private connection: NodePgDatabase<typeof schema>

    constructor(
        @Inject(DrizzleConnectionProvider)
        private drizzleProvider: DrizzleConnectionProvider,
    ) {
        this.connection = this.drizzleProvider.getConnection();
    }


    async findAll() {
        const accounts = await this.connection.query.account.findMany()
        return accounts;
    }

    findOne(id: number) {
    }

    async create(body) {
        // const account = await this.connection.insert(schema.account).values(body).returning()
        // return account
    }

    async update(id: number, account) {
    }

    async delete(id: number) {
    }
}
