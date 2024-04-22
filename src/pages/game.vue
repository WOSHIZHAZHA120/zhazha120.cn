<script lang="ts" setup>
definePageMeta({
	name: '游戏'
})
</script>

<template>
	<subpage>
		<n-flex vertical>
			<game-osu-mania/>
			<game-malody/>
			<game-tetrio/>
		</n-flex>
	</subpage>
</template>