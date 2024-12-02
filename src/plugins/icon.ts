import { useFavicon } from '@vueuse/core'
import avatar_main from '~/assets/avatar_main.webp'

export default defineNuxtPlugin(() => {
	useFavicon(avatar_main)
})