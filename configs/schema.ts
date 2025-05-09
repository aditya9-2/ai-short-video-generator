import { pgTable, serial, varchar, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageUrl'),
    subscription: boolean('subscription').default(false),
});
