<script lang="ts" setup>

defineProps<{
	readonly src: string
	readonly name: string
}>()

const imageLoaded = ref(false)
const componentMounted = ref(false)

const handleImageLoad = async () => {
	await nextTick(() => {
		imageLoaded.value = true
	})
}

onMounted(() => {
	componentMounted.value = true
})
</script>

<template>
	<n-popover :show="imageLoaded && componentMounted" placement="bottom">
		<template #trigger>
			<n-image :src="src" :width="200" @load="handleImageLoad"/>
		</template>

		{{ name }}

		<template #footer>
			<slot name="footer"/>
		</template>
	</n-popover>
</template>