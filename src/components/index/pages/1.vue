<script lang="ts" setup>
import { tryOnMounted } from '@vueuse/core'

const loaded = ref(false)

tryOnMounted(async () => {
	await nextTick(() => {
		loaded.value = true
	})
})
</script>

<template>
	<div class="screen-center">
		<Transition appear mode="out-in" name="scale">
			<div v-if="loaded" class="flex flex-col gap-1">
				<index-pages-1-fragment/>
				<index-pages-1-intro/>
				<index-pages-1-codetime/>
				<index-pages-1-buttons/>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss">
@use '~/styles/utils';
@use '~/styles/transitions/scale';
</style>