<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { useMessage } from 'naive-ui'
import ColorPickMode from '~/core/shared/enums/ColorPickMode'
import isMobile from '~/core/shared/isMobile'

const props = defineProps<{
	readonly r: number
	readonly g: number
	readonly b: number

	readonly mode: ColorPickMode
}>()

const color = computed(() => {
	switch (props.mode) {
		case ColorPickMode.RGB:
			return `rgb(${props.r}, ${props.g}, ${props.b})`
		case ColorPickMode.HEX:
			const parts = [
				props.r.toString(16),
				props.g.toString(16),
				props.b.toString(16)
			].join('')

			return `#${parts}`
		default:
			return 'unknown'
	}
})

const clipboard = useClipboard({
	legacy: true
})

const message = useMessage()

const copy = async () => {
	if (!clipboard.isSupported) {
		message.error('您的浏览器不支持复制功能')
	}

	await clipboard.copy(color.value)

	if (clipboard.copied) {
		message.success('复制成功!')
	} else {
		message.error('复制失败')
	}
}
</script>

<template>
	<n-popover :placement="(isMobile ? 'bottom' : 'left')">
		<template #trigger>
			<div :style="{ backgroundColor: `rgb(${r}, ${g}, ${b})` }" class="size-full cursor-pointer" @click="copy"/>
		</template>

		{{ color }}
	</n-popover>
</template>