<script lang="ts" setup>
import avatar_furry from '~/assets/avatar_furry.webp'
import isMobile from '~/shared/isMobile'
</script>

<template>
	<div :class="{ 'w-full mt-10': isMobile }">
		<div class="size-60 mx-auto">
			<Image :src="avatar_furry" alt="设定" image-class="size-full rounded"/>
		</div>
	</div>
</template>

<style lang="scss">
@use '~/styles/utils';
@use '~/styles/transitions/fade';
</style>