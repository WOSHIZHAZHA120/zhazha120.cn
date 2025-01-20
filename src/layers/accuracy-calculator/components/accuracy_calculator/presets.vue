<script lang="ts" setup>
import { isNullish, map, pipe } from 'remeda'
import presets from '~/shared/presets'
import type { AccuracyCalculatorPresetItem, AccuracyData } from '~/types/accuracy-calculator'

const data = defineModel<AccuracyData[]>('data', {
	required: true
})

const passRequirePercentage = defineModel<number>('pass-require-percentage', {
	required: true
})

const preset = ref<AccuracyCalculatorPresetItem>()

watch(preset, item => {
	if (isNullish(item)) {
		data.value = []
		passRequirePercentage.value = 0

		return
	}

	data.value = pipe(
		item.data,
		map(song => {
			return {
				name: song.name,
				notes: song.notes,
				accuracy: 0
			} satisfies AccuracyData
		})
	)

	passRequirePercentage.value = item.passRequirePercentage
})
</script>

<template>
	<div class="w-full">
		<Listbox v-model="preset" :options="presets" filter optionLabel="name"/>
	</div>
</template>