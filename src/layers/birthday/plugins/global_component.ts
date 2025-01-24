import birthday from '~/components/birthday.vue'
import event from '~/shared/event'

export default defineNuxtPlugin(() => {
	const rendered = h(birthday)

	event.emit('global_component.add', rendered)
})