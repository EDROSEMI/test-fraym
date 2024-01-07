CREATE TABLE IF NOT EXISTS "account" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"login" text,
	"birthday" date,
	CONSTRAINT "account_login_unique" UNIQUE("login")
);
