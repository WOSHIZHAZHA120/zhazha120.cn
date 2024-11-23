import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	ssr: false,
	srcDir: 'src',
	devtools: {
		enabled: true
	},
	app: {
		head: {
			title: '渣渣120'
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
				preset: Aura
			}
		}
	}
})