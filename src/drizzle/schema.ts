import { pgTable, serial, text, date } from "drizzle-orm/pg-core";

export const account = pgTable('account', {
  id: serial('id').primaryKey(),
  fullName: text('name'),
  email: text('email'),
  login: text('login').unique(),
  birthday: date('birthday'),
});