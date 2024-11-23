<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'

const windowSize = useWindowSize()
const minHeight = Math.max(windowSize.height.value, 960)
</script>

<template>
	<div class="flex flex-col">
		<div :style="{ height: `${minHeight}px` }">
			<index-pages-1/>
		</div>

		<index-pages-2/>
	</div>
</template>