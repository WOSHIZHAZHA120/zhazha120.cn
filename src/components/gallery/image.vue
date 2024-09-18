<script lang="ts" setup>

defineProps<{
	readonly src: string
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<n-image :src="src" :width="200"/>

		<n-card size="small">
			<slot name="footer"/>
		</n-card>
	</n-flex>
</template>