// accounts.service.ts
import { DrizzleConnectionProvider } from '@/drizzle/drizzle.provider';
import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '@/drizzle/schema'

@Injectable()
export class AccountsService {
    constructor(
        @Inject(DrizzleConnectionProvider)
        private db: PostgresJsDatabase<typeof schema>,
    ) { } // Внедряем репозиторий для работы с пользователями

    async findAll() {
        console.log('OK');
        const accouts = await this.db.select().from(schema.account)
        console.log('accouts :', accouts);
        return 'Возвращаем все аккаунты';
    }

    findOne(id: number) {
    }

    async create(account) {
    }

    async update(id: number, account) {
    }

    async delete(id: number) {
    }
}
