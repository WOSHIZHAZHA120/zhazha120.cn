<script lang="ts" setup>
import { useElementHover } from '@vueuse/core'
import avatar_furry from 'assets/avatar_furry.webp'
import furry_1 from 'assets/furry_1.webp'
import isMobile from '~/core/shared/isMobile'

const avatarContainer = ref<HTMLDivElement>()
const isAvatarHovered = useElementHover(avatarContainer)
</script>

<template>
	<div ref="avatarContainer" :class="{ 'w-full': isMobile }" class="screen-center-flex size-120">
		<Transition mode="out-in" name="fade">
			<template v-if="isAvatarHovered">
				<Image :src="furry_1" alt="设定" image-class="size-full"/>
			</template>

			<template v-else>
				<Image :src="avatar_furry" alt="头像" image-class="size-60 rounded"/>
			</template>
		</Transition>
	</div>
</template>

<style lang="scss">
@use '~/styles/utils';
@use '~/styles/transitions/fade';
</style>