<script lang="ts" setup>
import rank_colors from '~/core/shared/data/tetrio/rank_colors'
import tetrio_timelines from '~/core/shared/data/tetrio/timelines'
</script>

<template>
	<div class="flex flex-col gap-2">
		<span class="text-xl font-extrabold">Season 1 Rank</span>

		<Timeline :dt="{ 'event.min.height': '2rem' }" :value="tetrio_timelines.s1_rank" align="right">
			<template #content="slotProps">
				<Image :alt="slotProps.item.name" :src="(`https://tetr.io/res/league-ranks/${slotProps.item.name.toLowerCase()}.png`)" image-class="w-8" preview/>
			</template>

			<template #opposite="slotProps">
				<div :style="{ color: rank_colors[slotProps.item.name.toLowerCase() as 'z'] }" class="w-24">{{ slotProps.item.date }}</div>
			</template>
		</Timeline>
	</div>
</template>