import { Module } from "@nestjs/common";
import { AccountsController } from "./account.controller";
import { AccountsService } from "./account.service";
import { DrizzleModule } from "@/drizzle/drizzle.module";

@Module({
    imports: [DrizzleModule],
    providers: [AccountsService],
    controllers: [AccountsController],
})

export class AccountsModule { }