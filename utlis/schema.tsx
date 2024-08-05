import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput",{
    id:serial("id").primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    slug:varchar('slug').notNull(),
    createdBy:varchar('email').notNull(),
    createdAt:varchar('createAt').notNull(),

})