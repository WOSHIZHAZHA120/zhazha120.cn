<script lang="ts" setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { isNonNullish } from 'remeda'

const windowSize = useWindowSize()
const minHeight = Math.max(windowSize.height.value, 960)

const page2_container = ref<HTMLDivElement>()
const windowScroll = useWindowScroll()

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
		<div :style="{ 'min-height': `${minHeight}px` }" class="relative">
			<index-pages-1/>

			<Transition mode="out-in" name="fade">
				<div v-if="windowScroll.y.value <= 0" class="absolute left-1/2 bottom-60 -translate-x-1/2">
					<div class="animate-bounce" @click="goDown">
						<div class="p-2 text-4xl">
							<div class="i-ant-design:down-circle-filled"/>
						</div>
					</div>
				</div>
			</Transition>
		</div>

		<div ref="page2_container" :style="{ 'min-height': 'calc(100vh - 3rem)' }">
			<index-pages-2/>
		</div>
	</div>
</template>

<style lang="scss">
@use '~/styles/transitions/fade';
</style>