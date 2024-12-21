<script lang="ts" setup>
definePageMeta({
	name: '游戏'
})
</script>

<template>
	<shared-subpage>
		<div class="flex flex-col gap-2">
			<game-osu_mania/>
			<game-tetrio/>
			<game-malody/>
		</div>
	</shared-subpage>
</template>