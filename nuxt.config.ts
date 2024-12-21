import { definePreset } from '@primeuix/styled'
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	ssr: false,
	srcDir: 'src',
	app: {
		head: {
			title: '渣渣120'
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
			appear: true
		}
	},
	scripts: {
		registry: {
			clarity: {
				id: 'oegssgxsei'
			}
		}
	},
	modules: [
		'@unocss/nuxt',
		'@primevue/nuxt-module',
		'@nuxt/scripts'
	],
	primevue: {
		options: {
			theme: {
				preset: definePreset(Aura, {
					semantic: {
						primary: {
							50: '{zinc.50}',
							100: '{zinc.100}',
							200: '{zinc.200}',
							300: '{zinc.300}',
							400: '{zinc.400}',
							500: '{zinc.500}',
							600: '{zinc.600}',
							700: '{zinc.700}',
							800: '{zinc.800}',
							900: '{zinc.900}',
							950: '{zinc.950}'
						}
					}
				})
			}
		}
	},
	extends: [
		'src/modules/index',
		'src/modules/support',
		'src/modules/game',
		'src/modules/furry',
		'src/modules/accuracy-calculator'
	]
})