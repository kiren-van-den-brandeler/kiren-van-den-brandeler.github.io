import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	projects: defineCollection({
		loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['work', 'personal', 'studies']),
			discipline: z.array(z.enum(['plc-robotics', 'engineering', 'industrial-design'])),
			featured: z.boolean().default(false),
			featuredOrder: z.number().optional(),
			coverImage: z.string(),
			date: z.coerce.date(),
		}),
	}),
};
