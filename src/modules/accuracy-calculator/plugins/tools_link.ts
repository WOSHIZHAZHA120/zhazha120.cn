import event from '~/shared/event'

// @unocss-include

export default defineNuxtPlugin(() => {
	const link = useLink({
		to: '/accuracy-calculator'
	})

	event.emit('tools_links.add', {
		is_external: false,

		name: link.route.value.name,
		icon_class: 'i-ant-design:calculator-outlined',
		href: link.href.value
	})
})