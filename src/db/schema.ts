import { integer, pgTable, varchar, uuid, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'

export const users = pgTable(
  'users',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    clerkId: text('clerkId').notNull().unique(),
    name: varchar({ length: 255 }).notNull(),
    imageUrl: text('imageUrl').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    email: text('email').notNull().unique(),
  },
  t => [uniqueIndex('clerk_id_idx').on(t.clerkId)]
)

// TODO: add banner field
