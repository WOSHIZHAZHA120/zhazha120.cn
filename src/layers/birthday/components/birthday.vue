<script setup lang="ts">
import { tryOnBeforeMount } from '@vueuse/core'

const now = new Date()
const birthday = new Date('2006/5/7')
const ages = now.getFullYear() - birthday.getFullYear()

const banner = ref()
const show = ref(false)

tryOnBeforeMount(() => {
	show.value = birthday.getMonth() === now.getMonth() && birthday.getDate() === now.getDate()
})
</script>

<template>
	<Drawer v-model:visible="show" header="今天是渣渣的生日ww" position="full">
		<div class="flex flex-col gap-2">
			<div class="w-1/2 sm:w-1/4 text-center mx-auto">
				<Image v-if="banner" image-class="size-full" :src="banner"/>
			</div>

			<div class="flex justify-center items-center flex-col sm:flex-row">
				<span class="text-30">{{ ages - 1 }}</span>

				<div class="mx-10 leading-none flex justify-center items-center flex-col sm:flex-row">
					<span class="text-20 -mt-6 sm:mt-0 rotate-90 sm:rotate-0 opacity-50">&gt;</span>
					<span class="text-20 -mt-6 sm:mt-0 rotate-90 sm:rotate-0 opacity-50">&gt;</span>
					<span class="text-20 -mt-6 sm:mt-0 rotate-90 sm:rotate-0 opacity-50">&gt;</span>
				</div>

				<span class="text-30">{{ ages }}</span>
			</div>
		</div>
	</Drawer>
</template>