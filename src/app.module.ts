import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AccountsModule } from './account/account.module';

@Module({
  imports: [
    DrizzleModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
