<script lang="ts" setup>
import isMobile from '~/shared/isMobile'
import levels from '~/shared/osu_mania/levels'
</script>

<template>
	<div class="flex flex-col gap-2">
		<div class="font-bold">
			<div class="flex flex-wrap justify-evenly">
				<span :class="{ 'w-full': isMobile }" class="text-blue-300">叠 (Jack): {{ levels.jack }}</span>

				<template v-if="!isMobile">
					<Divider :dt="{ 'vertical.margin': '0 0.25rem' }" layout="vertical"/>
				</template>

				<span :class="{ 'w-full': isMobile }" class="text-yellow-300">技 (Tech): {{ levels.tech }}</span>

				<template v-if="!isMobile">
					<Divider :dt="{ 'vertical.margin': '0 0.25rem' }" layout="vertical"/>
				</template>

				<span :class="{ 'w-full': isMobile }" class="text-red-300">乱 (Speed): {{ levels.speed }}</span>

				<template v-if="!isMobile">
					<Divider :dt="{ 'vertical.margin': '0 0.25rem' }" layout="vertical"/>
				</template>

				<span :class="{ 'w-full': isMobile }" class="text-green-300">切 (Stream): {{ levels.stream }}</span>

				<template v-if="!isMobile">
					<Divider :dt="{ 'vertical.margin': '0 0.25rem' }" layout="vertical"/>
				</template>

				<span :class="{ 'w-full': isMobile }" class="text-purple-300">面 (Long Note): {{ levels.ln }}</span>
			</div>
		</div>

		<Divider/>
	</div>
</template>