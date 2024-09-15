<script lang="ts" setup>
</script>

<template>
	<div class="screen-center">
		<n-flex size='small' vertical>
			<div class="h-10"/>

			<index-intro/>

			<div class="h-10"/>

			<index-buttons/>

			<div class="h-10"/>

			<n-divider>技术栈</n-divider>

			<index-stacks/>
		</n-flex>
	</div>
</template>

<style lang="scss" scoped>
.screen-center {
	@apply flex justify-center items-center h-full;
}

.avatar {
	@apply rounded-full transition-(transform duration-1s) hover:rotate-[360deg];
}
</style>