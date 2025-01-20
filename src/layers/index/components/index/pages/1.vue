<script lang="ts" setup>
import { tryOnMounted } from '@vueuse/core'
import isMobile from '~/shared/isMobile'

const loaded = ref(false)

tryOnMounted(async () => {
	await nextTick(() => {
		loaded.value = true
	})
})
</script>

<template>
	<div :class="{ 'screen-center': !isMobile }">
		<Transition appear mode="out-in" name="scale">
			<div v-if="loaded" :class="{ 'flex-wrap': isMobile }" class="flex items-center gap-10">
				<index-pages-1-avatar/>

				<div :class="{ 'text-center w-full': isMobile }" class="flex justify-center">
					<div :class="{ 'items-center gap-2.5': isMobile }" class="flex flex-col gap-1">
						<div class="flex flex-col gap-5">
							<index-pages-1-name/>
							<index-pages-1-tags/>
						</div>

						<index-pages-1-intro/>
						<index-pages-1-codetime/>
						<index-pages-1-buttons/>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss">
@use '~/styles/utils';
@use '~/styles/transitions/scale';
</style>