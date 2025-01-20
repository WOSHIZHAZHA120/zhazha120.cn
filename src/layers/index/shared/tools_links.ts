import event from '~/shared/event'
import type Link from '~/types/link'

const tools_links = shallowReactive<Link[]>([])

event.on('tools_links.add', (link: Link) => {
	tools_links.push(link)
})

export default tools_links