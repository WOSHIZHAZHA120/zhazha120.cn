import Tooltip from 'primevue/tooltip'

export default defineNuxtPlugin(nuxt => {
	nuxt.vueApp.directive('tooltip', Tooltip)
})