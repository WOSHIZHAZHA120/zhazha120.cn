<script lang="ts" setup>
import isMobile from '~/core/shared/isMobile'

defineProps<{
	readonly difference: number
}>()
</script>

<template>
	<div :class="{ 'w-1/3': !isMobile }" class="bg-red-600 rounded p-5">
		<div class="text-sm font-bold flex justify-center">
			<span>好可惜, 就差 {{ difference }}%</span>
		</div>
	</div>
</template>