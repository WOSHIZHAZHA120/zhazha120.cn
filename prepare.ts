import { exec } from 'node:child_process'

(async () => {
	await Promise.all([
		new Promise<void>(resolve => {
			exec('nuxt prepare', () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/index`, () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/support`, () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/game`, () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/furry`, () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/accuracy-calculator`, () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/blog`, () => {
				resolve()
			})
		}),
		new Promise<void>(resolve => {
			exec(`nuxt prepare --cwd=src/layers/image-watermark-tool`, () => {
				resolve()
			})
		})
	])
})()