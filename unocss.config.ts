import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'none',
			fonts: {
				sans: ['HarmonyOS Sans SC', 'HarmonyOS Sans']
			}
		})
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass()
	]
})