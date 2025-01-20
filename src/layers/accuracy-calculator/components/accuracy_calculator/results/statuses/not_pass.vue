<script lang="ts" setup>
defineProps<{
	readonly difference: number
}>()
</script>

<template>
	<div class="bg-red-600 rounded p-2">
		<div class="text-sm font-bold flex justify-center">
			<span>好可惜, 就差 {{ difference }}%</span>
		</div>
	</div>
</template>