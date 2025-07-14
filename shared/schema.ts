import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const elvishNames = pgTable("elvish_names", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  meaning: text("meaning").notNull(),
  language: text("language").notNull(), // sindarin, quenya, general
  gender: text("gender").notNull(), // male, female, neutral
  category: text("category").notNull(), // traditional, nature, warrior, noble, mystical
  pronunciation: text("pronunciation"),
});

export const nameGenerationRequest = pgTable("name_generation_requests", {
  id: serial("id").primaryKey(),
  gender: text("gender").notNull(),
  language: text("language").notNull(),
  category: text("category").notNull(),
  generatedNames: json("generated_names").notNull(),
});

export const insertElvishNameSchema = createInsertSchema(elvishNames).omit({
  id: true,
});

export const insertNameGenerationRequestSchema = createInsertSchema(nameGenerationRequest).omit({
  id: true,
});

export type ElvishName = typeof elvishNames.$inferSelect;
export type InsertElvishName = z.infer<typeof insertElvishNameSchema>;
export type NameGenerationRequest = typeof nameGenerationRequest.$inferSelect;
export type InsertNameGenerationRequest = z.infer<typeof insertNameGenerationRequestSchema>;

export const generateNamesSchema = z.object({
  gender: z.enum(["male", "female", "neutral", "any"]),
  language: z.enum(["sindarin", "quenya", "general"]),
  category: z.enum(["traditional", "nature", "warrior", "noble", "mystical"]),
  count: z.number().min(1).max(10).default(6),
});

export type GenerateNamesRequest = z.infer<typeof generateNamesSchema>;
