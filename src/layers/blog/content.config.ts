import { defineCollection, defineContentConfig } from '@nuxt/content'
import { join } from 'node:path'
import { z } from 'zod'

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: 'page',
			source: {
				cwd: join(__dirname, 'content'),
				include: '*.md'
			},
			schema: z.object({
				date: z.string(),
				title: z.string(),
				description: z.string()
			})
		})
	}
})