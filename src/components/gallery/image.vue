<script lang="ts" setup>

defineProps<{
	readonly src: string
	readonly name: string
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<n-image :src="src" :width="200"/>

		<n-card size="small">
			<n-flex align="start" size="small" vertical>
				<n-text>{{ name }}</n-text>
				<slot name="footer"/>
			</n-flex>
		</n-card>
	</n-flex>
</template>