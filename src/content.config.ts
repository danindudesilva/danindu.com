import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  writing,
};
