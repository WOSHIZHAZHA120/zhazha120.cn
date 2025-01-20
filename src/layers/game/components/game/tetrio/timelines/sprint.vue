<script lang="ts" setup>
import tetrio_timelines from '~/shared/tetrio/timelines'
</script>

<template>
	<div class="flex flex-col gap-2">
		<span class="text-xl font-extrabold">40L</span>

		<Timeline :dt="{ 'event.min.height': '2rem' }" :value="tetrio_timelines.sprint" align="right">
			<template #content="slotProps">
				<div class="w-16">{{ slotProps.item.milestone }}</div>
			</template>

			<template #opposite="slotProps">
				<div class="w-24">{{ slotProps.item.date }}</div>
			</template>
		</Timeline>
	</div>
</template>