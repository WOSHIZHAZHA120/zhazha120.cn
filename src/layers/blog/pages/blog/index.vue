<script setup lang="ts">
const post = useAsyncData(async () => {
	return await queryCollection('blog').first()
})

definePageMeta({
	name: '博客'
})
</script>

<template>
	<shared-subpage>
		<Transition name="fade" appear>
			<Panel :dt="{ 'header.padding': 0 }" class="text-center" v-if="(post.status.value === 'success')">
				<h1 class="mb-1 fw-bold">{{ post.data.value.title }}</h1>
				<h4 class="mt-1 text-(white opacity-50)">{{ post.data.value.description }}</h4>

				<Divider/>

				<div class="min-h-120">
					<ContentRenderer :value="post.data.value"/>
				</div>

				<Divider/>

				<span class="text-(white opacity-30)">{{ new Date(post.data.value.date).toLocaleDateString() }}</span>
			</Panel>
		</Transition>
	</shared-subpage>
</template>

<style lang="scss">
@use '~/styles/transitions/fade';
</style>