<script lang="ts" setup>

defineProps<{
	readonly src: string
	readonly name: string
}>()

const show = ref(false)
</script>

<template>
	<n-popover :show="show" placement="bottom">
		<template #trigger>
			<n-image :src="src" :width="200" @load="show = true"/>
		</template>

		{{ name }}

		<template #footer>
			<slot name="footer"/>
		</template>
	</n-popover>
</template>