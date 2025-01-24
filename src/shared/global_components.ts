import event from '~/shared/event'

const global_components = shallowReactive<VNode[]>([])

event.on('global_component.add', (vNode: VNode) => {
	global_components.push(vNode)
})

export default global_components