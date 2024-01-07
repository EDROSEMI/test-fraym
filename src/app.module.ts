import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AccountsModule } from './account/account.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [
    DrizzleModule,
    AccountsModule,
    ParticipantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
