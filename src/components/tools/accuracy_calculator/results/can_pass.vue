<script lang="ts" setup>
import { isNullish, last, round } from 'remeda'
import type { AccuracyData } from '~/types/accuracy-calculator'

const props = defineProps<{
	readonly results: number[]
	readonly data: AccuracyData[]
	readonly passRequirePercentage: number
}>()

const lastAcc = computed(() => {
	const lastData = last(props.data)

	if (isNullish(lastData)) {
		return 0
	}

	return lastData.accuracy
})
</script>

<template>
	<Transition appear mode="out-in" name="fade">
		<template v-if="results.length === data.length">
			<div class="mt-10 flex justify-center">
				<template v-if="lastAcc >= passRequirePercentage">
					<tools-accuracy_calculator-results-statuses-passed/>
				</template>

				<template v-else>
					<tools-accuracy_calculator-results-statuses-not_pass :difference="round(passRequirePercentage - last(data)!.accuracy, 2)"/>
				</template>
			</div>
		</template>
	</Transition>
</template>

<style lang="scss">
@use '~/styles/transitions/fade';
</style>