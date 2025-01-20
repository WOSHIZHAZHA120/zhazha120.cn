import event from '~/shared/event'

// @unocss-include

export default defineNuxtPlugin(() => {
	const link = useLink({
		to: '/furry'
	})

	event.emit('useful_links.add', {
		is_external: false,

		name: link.route.value.name,
		icon_class: 'i-tabler:paw',
		href: link.href.value
	})
})