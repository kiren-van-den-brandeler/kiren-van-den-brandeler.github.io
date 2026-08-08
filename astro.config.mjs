// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://kiren-van-den-brandeler.github.io',
	output: 'static',
	integrations: [mdx()],
});
