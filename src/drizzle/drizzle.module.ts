import { Module } from '@nestjs/common';
import { DrizzleConnectionProvider } from './drizzle.provider';

@Module({
    providers: [DrizzleConnectionProvider],
    exports: [DrizzleConnectionProvider],
})
export class DrizzleModule { }
