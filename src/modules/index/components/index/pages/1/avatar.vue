<script lang="ts" setup>
import { useElementHover } from '@vueuse/core'
import avatar_furry from '~/assets/avatar_furry.webp'
import avatar_main from '~/assets/avatar_main.webp'
import isMobile from '~/shared/isMobile'

const avatarContainer = ref<HTMLDivElement>()
const isAvatarHovered = useElementHover(avatarContainer)
</script>

<template>
	<div :class="{ 'w-full mt-20': isMobile }">
		<div class="size-60 mx-auto">
			<div ref="avatarContainer" :class="{ 'w-full': isMobile }" class="screen-center-flex">
				<Transition mode="out-in" name="fade">
					<template v-if="isAvatarHovered">
						<Image :src="avatar_furry" alt="设定" image-class="size-full rounded"/>
					</template>

					<template v-else>
						<Image :src="avatar_main" alt="头像" image-class="size-40 rounded-full"/>
					</template>
				</Transition>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@use '~/styles/utils';
@use '~/styles/transitions/fade';
</style>