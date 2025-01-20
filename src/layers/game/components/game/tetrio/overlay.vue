<script lang="ts" setup>
import tetrio from '~/shared/tetrio/data'
import isMobile from '~/shared/isMobile'

const query = computed(() => {
	return Object.entries({
		username: tetrio.id,
		'display-name': true,
		'display-level': true,
		'display-role': true,
		'display-badge': true,
		'display-rank': true,
		'display-league': true,
		'display-sprint': true,
		'display-blitz': true,
		'display-standingsets': true,
		'display-standingsets-sprint': true,
		'display-standingsets-blitz': true,
		alignment: 'top',
		layout: isMobile.value ? 'vertical' : 'horizontal',
		league: ['apm', 'pps', 'vs', 'x_winrate', 'percentile'].join('+'),
		sprint: ['pieces', 'pps', 'ff', 'kpp', 'kps', 'quads'].join('+'),
		blitz: ['pps', 'ff', 'spp', 'pieces', 'pieces', 'quads', 'tspins', 'allclears'].join('+')
	}).map(option => {
		return option.join('=')
	}).join('&')
})

const url = computed(() => {
	return `https://tetr.fires.bz/overlay/user?${query.value}`
})
</script>

<template>
	<iframe :src="url" class="border-none w-full h-60"/>
</template>