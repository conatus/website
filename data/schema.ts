// Generated by ts-to-zod
import { z } from "zod";

export const baseRecordSchema = z.object({
  id: z.string(),
  createdTime: z.string(),
});

export const fullSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export const categorySchema = z.string();

export const blogPostSchema = baseRecordSchema.extend({
  fields: z.object({
    Title: z.string(),
    Summary: z.string(),
    Body: z.string(),
    Date: z.string(),
    "Added by": z.string().optional(),
    Public: z.literal(true),
  }),
});

export const thumbnailsSchema = z.object({
  small: fullSchema,
  large: fullSchema,
  full: fullSchema.optional(),
});

export const documentSchema = z.object({
  id: z.string(),
  url: z.string(),
  filename: z.string(),
  size: z.number(),
  type: z.string(),
  thumbnails: thumbnailsSchema,
});

export const solidarityActionSchema = baseRecordSchema.extend({
  fields: z.object({
    Name: z.string(),
    Location: z.string().optional(),
    Summary: z.string().optional(),
    Date: z.string(),
    Link: z.string().optional(),
    Country: z.string(),
    "Added by": z.string().optional(),
    Category: z.array(categorySchema).optional(),
    Document: z.array(documentSchema).optional(),
    Notes: z.string().optional(),
    Public: z.literal(true),
  }),
});
