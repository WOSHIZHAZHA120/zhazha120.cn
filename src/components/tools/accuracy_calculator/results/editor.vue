<script lang="ts" setup>
const data = defineModel<AccuracyData[]>('data', {
	required: true
})

import { isEmpty, isNonNullish, prop, round, sumBy } from 'remeda'
import isMobile from '~/core/shared/isMobile'
import type { AccuracyData } from '~/types/accuracy-calculator'
</script>

<template>
	<TransitionGroup appear mode="out-in" name="fade">
		<template v-for="(item, index) in data">
			<div :class="{ 'flex-col': isMobile }" class="flex justify-center items-center gap-2">
				<div v-if="isNonNullish(item.name)" class="flex flex-col">
					<span v-if="!isEmpty(item.name.english)">{{ item.name.english }}</span>
					<span v-if="isNonNullish(item.name.original) && !isEmpty(item.name.original)" class="text-xs opacity-50">{{ item.name.original }}</span>
				</div>

				<n-form-item :label="(`出第 ${index + 1} 首歌时的 acc`)">
					<n-input-number v-model:value="item.accuracy" :max="100" :min="0" :step="0.01">
						<template #suffix>%</template>
					</n-input-number>
				</n-form-item>

				<span class="text-sm opacity-50">{{ item.notes }} 物量 ({{ round(item.notes / sumBy(data, prop('notes')) * 100, 2) }}%)</span>

				<template v-if="isMobile && data.length !== index + 1">
					<Divider/>
				</template>
			</div>
		</template>
	</TransitionGroup>
</template>

<style lang="scss">
@import '~/styles/transitions/fade';
</style>