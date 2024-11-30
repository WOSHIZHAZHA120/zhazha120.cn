<script lang="ts" setup>
import isMobile from '~/core/shared/isMobile'
</script>

<template>
	<div :class="{ 'w-1/3': !isMobile }" class="bg-green-600 rounded p-6 cursor-pointer">
		<div class="text-4xl flex justify-center">
			<div class="w-fit animate-spin animate-duration-800ms hover:animate-duration-1ms">
				<span>过了!</span>
			</div>
		</div>
	</div>
</template>