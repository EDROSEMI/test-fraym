// users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from './account.service';

@Controller('account')
export class AccountsController {
    constructor(private accountService: AccountsService) { }

    @Get()
    findAll() {
        return this.accountService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.accountService.findOne(+id);
    }

    @Post()
    create(@Body() body) {
        return this.accountService.create(body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.accountService.delete(+id);
    }
}
