import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	srcDir: 'src',
	app: {
		head: {
			title: '渣渣120'
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	},
	devtools: {
		enabled: true
	},
	modules: [
		'@unocss/nuxt'
	],
	vite: {
		plugins: [
			AutoImport({
				imports: [
					'vue',
					'vue-router',
					{
						'naive-ui': [
							'useDialog',
							'useMessage',
							'useNotification',
							'useLoadingBar'
						]
					}
				]
			}),
			Components({
				resolvers: [
					NaiveUiResolver()
				]
			})
		]
	}
})