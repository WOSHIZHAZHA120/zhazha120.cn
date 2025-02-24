import event from '~/shared/event'

// @unocss-include

export default defineNuxtPlugin(() => {
	const link = useLink({
		to: '/image-watermark-tool'
	})

	event.emit('tools_links.add', {
		is_external: false,

		name: link.route.value.name,
		icon_class: 'i-ant-design:file-image-outlined',
		href: link.href.value
	})
})