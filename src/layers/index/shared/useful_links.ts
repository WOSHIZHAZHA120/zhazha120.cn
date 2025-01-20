import event from '~/shared/event'
import type Link from '~/types/link'

const useful_links = shallowReactive<Link[]>([])

event.on('useful_links.add', (link: Link) => {
	useful_links.push(link)
})

export default useful_links