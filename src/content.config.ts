import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
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
});

const studies = defineCollection({
	loader: glob({ base: './src/content/studies', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.literal('studies'),
		date: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		coverImage: z.string().optional(),
		videoIds: z.array(z.string()).optional(),
		externalLink: z.string().optional(),
	}),
});

export const collections = { projects, studies };
