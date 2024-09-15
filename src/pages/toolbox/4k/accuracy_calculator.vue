<script lang="ts" setup>
import datasource from '@/assets/4k/keys.json'
import { createReusableTemplate, tryOnMounted, useClipboard } from '@vueuse/core'
import { type TreeSelectOption, useMessage } from 'naive-ui'
import { isEmpty, isNonNullish, isNullish, sum } from 'remeda'

definePageMeta({
	name: 'acc 计算器'
})

enum SelectableType {
	DATABASE,
	CUSTOM
}

const type = ref(SelectableType.DATABASE)
const selected = ref()

const options = computed(() => {
	const result = new Array<TreeSelectOption>()

	for (const data of datasource) {
		const parts = data.name.split('.')

		parts.reduce((data, part) => {
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

const customData = ref({
	name: SelectableType.CUSTOM,
	keys: [],
	require: 96
})

const data = computed(() => {
	if (type.value === SelectableType.CUSTOM) {
		return customData.value
	}

	return datasource.find(data => {
		return data.name === selected.value
	})
})

const totalKeys = computed(() => {
	if (isNullish(data.value)) {
		return 0
	}

	return sum<number[]>(data.value.keys)
})

const validKeysCount = computed(() => {
	if (isNullish(data.value)) {
		return 0
	}

	return data.value.keys.reduce(currentIndex => {
		if (isNullish(data.value)) {
			return currentIndex
		}

		const currentValue = data.value.keys[currentIndex]

		if (isNonNullish(currentValue)) {
			return currentIndex + 1
		}

		return currentIndex
	}, 0)
})

const acc = ref([])

const validAccCount = computed(() => {
	return acc.value.reduce(currentIndex => {
		const currentValue = acc.value[currentIndex]

		if (isNonNullish(currentValue)) {
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
			data: data.value,
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

			type.value = SelectableType.CUSTOM
			customData.value = data.data
			acc.value = data.acc
		}
	} catch (e) {

	}
})

const handleCustomDataRemove = (index: number) => {
	customData.value.keys = customData.value.keys.filter((_, i) => {
		return i !== index
	})
}
</script>

<template>
	<subpage>
		<n-card>
			<n-flex vertical>
				<n-tabs v-model:value="type" justify-content="space-evenly" type="line">
					<n-tab-pane :name="SelectableType.DATABASE" label="数据库">
						<n-tree-select v-model:value="selected" :options="options" check-strategy="child" filterable
									   show-path/>
					</n-tab-pane>

					<n-tab-pane :name="SelectableType.CUSTOM" label="自定义">
						<n-flex vertical>
							<n-form-item :show-feedback="false" label="键数据">
								<n-dynamic-input v-slot="{ index }" v-model:value="customData.keys"
												 @remove="handleCustomDataRemove">
									<n-input-number v-model:value="customData.keys[index]" :min="1"
													:placeholder="(`第 ${index+1} 首的物量`)" :step="1" class="w-full"/>
								</n-dynamic-input>
							</n-form-item>

							<n-form-item :show-feedback="false" label="需要 (%)">
								<n-slider v-model:value="customData.require" :max="100" :min="0" :step="1"/>
							</n-form-item>
						</n-flex>
					</n-tab-pane>
				</n-tabs>

				<template
					v-if="isNonNullish(selected) || (type === SelectableType.CUSTOM && validKeysCount > 0)">
					<n-divider/>

					<n-flex vertical>
						<template v-if="isNonNullish(data)">
							<n-grid :cols="(`1 s:${data.keys.length % 5}`)" :x-gap="10" :y-gap="10" responsive="screen">
								<template v-for="(key, index) in data.keys">
									<n-grid-item>
										<n-flex :size="0" vertical>
											<n-form-item :label="(`出第 ${index + 1} 首歌时的 acc`)"
														 :show-feedback="false"
														 required>
												<n-input-number v-model:value="acc[index]" :max="100" :min="0"
																:step="0.01" class="w-full"/>
											</n-form-item>

											<n-flex class="!gap-1">
												<n-text :depth="3">{{ key }}</n-text>

												<n-text :depth="3">
													({{ Number(key / totalKeys * 100).toFixed(2) }}%)
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
									<template v-if="acc[validAccCount - 1] >= data.require">
										<ResultAlert title="过了!" type="success"/>
									</template>

									<template v-else>
										<ResultAlert title="失败了" type="error"/>
									</template>
								</template>

								<template v-else>
									<template v-for="text in resultTexts">
										<n-alert :show-icon="false" class="w-fit" size="small" type="info">
											<n-text>{{ text }}</n-text>
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