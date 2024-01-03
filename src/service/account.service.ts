// accounts.service.ts
import { Injectable } from '@nestjs/common';
// import { Account } from './account.entity';
// import { Repository } from 'drizzle-orm';


@Injectable()
export class UsersService {
    constructor(private userRepository: Repository<Account>) { } // Внедряем репозиторий для работы с пользователями

    findAll(): Promise<Account[]> {
        return this.userRepository.find(); // Получить всех пользователей
    }

    findOne(id: number): Promise<Account> {
        return this.userRepository.findOne(id); // Найти пользователя по ID
    }

    async create(account: Account): Promise<Account> {
        return this.userRepository.save(account); // Создать нового пользователя
    }

    async update(id: number, account: Partial<Account>): Promise<void> {
        await this.userRepository.update(id, account); // Обновить пользователя по ID
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id); // Удалить пользователя по ID
    }
}
