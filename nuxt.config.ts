// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	ssr: false,
	srcDir: 'src',
	devtools: {
		enabled: true
	},
	modules: [
		'@unocss/nuxt',
		'@primevue/nuxt-module'
	]
})