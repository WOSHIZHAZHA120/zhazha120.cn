<script lang="ts" setup>
const data = defineModel<AccuracyData[]>('data', {
	required: true
})

import { IftaLabel } from 'primevue'
import { isEmpty, isNonNullish, prop, round, sumBy } from 'remeda'
import isMobile from '~/shared/isMobile'
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

				<IftaLabel>
					<InputNumber v-model="item.accuracy" :allow-empty="false" :format="false" :max="100" :max-fraction-digits="2" :min="0" :step="0.01" class="w-fit" show-buttons suffix="%"/>
					<label>出第 {{ index + 1 }} 首歌时的 acc</label>
				</IftaLabel>

				<span class="text-sm opacity-50">{{ item.notes }} 物量 ({{ round(item.notes / sumBy(data, prop('notes')) * 100, 2) }}%)</span>

				<template v-if="isMobile && data.length !== index + 1">
					<Divider/>
				</template>
			</div>
		</template>
	</TransitionGroup>
</template>

<style lang="scss">
@use '~/styles/transitions/fade';
</style>