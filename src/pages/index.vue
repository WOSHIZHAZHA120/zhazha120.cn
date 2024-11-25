<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { isNonNullish } from 'remeda'

const windowSize = useWindowSize()
const minHeight = Math.max(windowSize.height.value, 960)

const page2_container = ref<HTMLDivElement>()

const goDown = () => {
	if (isNonNullish(page2_container.value)) {
		page2_container.value.scrollIntoView({
			behavior: 'smooth'
		})
	}
}
</script>

<template>
	<div ref="container" class="flex flex-col">
		<div :style="{ height: `${minHeight}px` }">
			<index-pages-1/>

			<div class="absolute left-1/2 bottom-20 -translate-x-1/2">
				<div class="animate-bounce" @click="goDown">
					<div class="p-2 text-4xl">
						<div class="i-ant-design:down-circle-filled"/>
					</div>
				</div>
			</div>
		</div>

		<div ref="page2_container" :style="{ height: 'calc(100vh - 3rem)' }">
			<index-pages-2/>
		</div>
	</div>
</template>