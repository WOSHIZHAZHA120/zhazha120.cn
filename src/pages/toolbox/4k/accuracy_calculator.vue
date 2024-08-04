<script lang="ts" setup>
import datasource from '@/assets/4k/keys.json'
import { createReusableTemplate, tryOnMounted, useClipboard } from '@vueuse/core'
import { type TreeSelectOption, useMessage } from 'naive-ui'
import { isEmpty, isNonNullish, isNullish, last, reduce, sum } from 'remeda'

definePageMeta({
	name: 'acc 计算'
})

const selected = ref()

const options = computed(() => {
	const result = new Array<TreeSelectOption>()

	for (const data of datasource) {
		const parts = data.name.split('.')

		reduce(parts, (data, part) => {
			const newKey = [data.lastKey, part]
				.filter(part => {
					return !isEmpty(part)
				})
				.join('.')

			const generateResult = (options: typeof data.options) => {
				return {
					lastKey: newKey,
					options
				}
			}

			const find = data.options.find(option => {
				return option.key === newKey
			})

			if (isNullish(find)) {
				const length = data.options.push({
					key: newKey,
					label: part
				})

				const option = data.options[length - 1]

				if (isNullish(option.children)) {
					option.children = []
				}

				return generateResult(option.children)
			}

			if (isNullish(find.children)) {
				find.children = []
			}

			return generateResult(find.children)
		}, {
			lastKey: '',
			options: result
		})
	}

	const process = (option: TreeSelectOption) => {
		if (isNonNullish(option.children) && !isEmpty(option.children)) {
			for (const child of option.children) {
				process(child)
			}

			return
		}

		delete option.children
	}

	for (const option of result) {
		process(option)
	}

	return result
})

const data = computed(() => {
	return datasource.find(data => {
		return data.name === selected.value
	})
})

const acc = ref([])

const validAccCount = computed(() => {
	return reduce(acc.value, currentIndex => {
		const currentValue = acc.value[currentIndex]

		if (isNonNullish(currentValue) && !isEmpty(currentValue)) {
			return currentIndex + 1
		}

		return currentIndex
	}, 0)
})

const results = computed(() => {
	if (isNullish(data.value)) {
		return []
	}

	const result = new Array<string>()

	for (let i = 0; i < validAccCount.value; i++) {
		if (i <= 0) {
			result.push(
				Number(acc.value[i]).toFixed(2)
			)

			continue
		}

		const currentKeyParts = data.value.keys.slice(0, i + 1)
		const prevKeyParts = data.value.keys.slice(0, i)
		const currentTotal = sum(currentKeyParts)
		const prevTotal = sum(prevKeyParts)

		const currentNumerator = acc.value[i] * currentTotal
		const prevNumerator = acc.value[i - 1] * prevTotal
		const nextNumerator = (currentNumerator - prevNumerator)

		result.push(
			Number(nextNumerator / data.value.keys[i]).toFixed(2)
		)
	}

	return result
})

const resultTexts = computed(() => {
	return results.value.map((result, index) => {
		return `第 ${index + 1} 首: ` + Number(result).toFixed(2)
	})
})

const { define: ResultAlertDefine, reuse: ResultAlert } = createReusableTemplate<{
	readonly type: 'success' | 'error'
	readonly title: string
}>()

const message = useMessage()
const clipboard = useClipboard()

const copyResults = () => {
	const text = resultTexts.value.join('\n')

	clipboard.copy(text)
	message.success('复制成功!')
}

const copyLink = () => {
	const link = new URL('?_=' + btoa(
		JSON.stringify({
			name: selected.value,
			acc: acc.value
		})
	), location.href).toString()

	clipboard.copy(link)
	message.success('复制成功!')
}

tryOnMounted(() => {
	try {
		const params = new URLSearchParams(location.search)

		if (params.has('_')) {
			const encodedValue = params.get('_')

			if (isNullish(encodedValue)) {
				return
			}

			const decodedValue = atob(encodedValue)
			const data = JSON.parse(decodedValue)

			selected.value = data.name
			acc.value = data.acc
		}
	} catch (e) {

	}
})
</script>

<template>
	<subpage>
		<n-card>
			<n-flex vertical>
				<n-tree-select v-model:value="selected" :options="options" check-strategy="child" filterable show-path/>

				<template v-if="isNonNullish(selected)">
					<n-divider/>

					<n-flex vertical>
						<template v-if="isNonNullish(data)">
							<n-grid :x-gap="10" :y-gap="10" cols="1 s:4" responsive="screen">
								<template v-for="(key, index) in data.keys">
									<n-grid-item>
										<n-flex :size="0" vertical>
											<n-form-item :show-feedback="false" required>
												<template #label>
													<n-text>出第 {{ index + 1 }} 首歌时的 acc</n-text>
												</template>

												<n-input-number v-model:value="acc[index]" :max="100" :min="0"
																:step="0.01" class="w-full"/>
											</n-form-item>

											<n-flex class="!gap-1">
												<n-text :depth="3">{{ key }}</n-text>

												<n-text :depth="3">
													({{ Number(key / sum(data.keys) * 100).toFixed(2) }}%)
												</n-text>
											</n-flex>
										</n-flex>
									</n-grid-item>
								</template>
							</n-grid>

							<n-flex justify="center">
								<ResultAlertDefine v-slot="{ type, title }">
									<n-alert :title="title" :type="type" class="w-full sm:w-1/3">
										<n-flex align="center" justify="space-evenly">
											<n-flex :size="0" vertical>
												<template v-for="text in resultTexts">
													<n-text>{{ text }}</n-text>
												</template>
											</n-flex>

											<n-flex vertical>
												<n-button @click="copyResults">复制</n-button>
												<n-button @click="copyLink">分享</n-button>
											</n-flex>
										</n-flex>
									</n-alert>
								</ResultAlertDefine>

								<template v-if="validAccCount >= data.keys.length">
									<template v-if="last(acc)! >= data.require">
										<ResultAlert title="过了!" type="success"/>
									</template>

									<template v-else>
										<ResultAlert title="失败了" type="error"/>
									</template>
								</template>

								<template v-else>
									<template v-for="acc in results">
										<n-alert :show-icon="false" class="w-fit" size="small" type="info">
											<n-text>{{ acc }}%</n-text>
										</n-alert>
									</template>
								</template>
							</n-flex>
						</template>
					</n-flex>
				</template>
			</n-flex>
		</n-card>
	</subpage>
</template>