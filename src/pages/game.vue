<script lang="ts" setup>
definePageMeta({
	name: '游戏'
})
</script>

<template>
	<subpage>
		<n-space vertical>
			<game-malody/>
			<game-tetrio/>
		</n-space>
	</subpage>
</template>