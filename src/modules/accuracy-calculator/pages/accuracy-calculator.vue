<script lang="ts" setup>
import type { AccuracyData } from '~/modules/accuracy-calculator/types/accuracy-calculator'

const data = ref<AccuracyData[]>([])
const passRequirePercentage = ref(0)

definePageMeta({
	name: 'acc 计算器'
})
</script>

<template>
	<shared-subpage>
		<div class="flex flex-col gap-2">
			<Panel :collapsed="true" header="预设" toggleable>
				<accuracy_calculator-presets v-model:data="data" v-model:pass-require-percentage="passRequirePercentage"/>
			</Panel>

			<Panel :collapsed="true" header="编辑器" toggleable>
				<accuracy_calculator-editor v-model:data="data" v-model:pass-require-percentage="passRequirePercentage"/>
			</Panel>

			<Panel :dt="{ 'header.padding': 0, 'content.padding': '0.5rem' }">
				<accuracy_calculator-results v-model:data="data" v-model:pass-require-percentage="passRequirePercentage"/>
			</Panel>
		</div>
	</shared-subpage>
</template>