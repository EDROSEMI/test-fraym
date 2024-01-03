// users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from '@/service/account.service';
// import { Account } from './account.entity';

@Controller('users')
export class AccountsController {
    constructor(private usersService: AccountsService) { }

    @Get()
    findAll(): Promise<Account[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Account> {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() account: Account): Promise<Account> {
        return this.usersService.create(account);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() account: Account): Promise<void> {
        return this.usersService.update(+id, account);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.usersService.delete(+id);
    }
}
