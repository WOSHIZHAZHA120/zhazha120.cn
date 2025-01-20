<script lang="ts" setup>
import { isEmpty, isNullish, map, pipe, prop, round, sumBy, takeWhile } from 'remeda'
import type { AccuracyData } from '~/types/accuracy-calculator'

const data = defineModel<AccuracyData[]>('data', {
	required: true
})

const passRequirePercentage = defineModel<number>('pass-require-percentage', {
	required: true
})

const results = computed(() => {
	const filteredData = pipe(
		data.value,
		takeWhile(item => !isNullish(item.accuracy) && item.accuracy > 0)
	)

	return pipe(
		filteredData,
		map((item, index) => {
			const currentAccuracy = round(item.accuracy, 2)

			if (index <= 0) {
				return currentAccuracy
			}

			const totalNotes = sumBy(filteredData.slice(0, index + 1), prop('notes'))
			const historyTotalNotes = sumBy(filteredData.slice(0, index), prop('notes'))

			const previousAccuracy = round(filteredData[index - 1].accuracy, 2)

			const currentNumerator = currentAccuracy * totalNotes
			const previousNumerator = previousAccuracy * historyTotalNotes

			return round((currentNumerator - previousNumerator) / item.notes, 2)
		})
	)
})
</script>

<template>
	<div class="my-10">
		<Transition appear mode="out-in" name="fade">
			<template v-if="data.length <= 0">
				<accuracy_calculator-results-empty/>
			</template>

			<template v-else>
				<div class="flex flex-col gap-2">
					<accuracy_calculator-results-editor v-model:data="data"/>

					<template v-if="!isEmpty(results)">
						<div class="mt-10">
							<div class="flex flex-col gap-2">
								<accuracy_calculator-results-accuracys :pass-require-percentage="passRequirePercentage" :results="results"/>
								<accuracy_calculator-results-can_pass :data="data" :pass-require-percentage="passRequirePercentage" :results="results"/>
							</div>
						</div>
					</template>
				</div>
			</template>
		</Transition>
	</div>
</template>

<style lang="scss">
@use '~/styles/transitions/fade';
</style>