<script lang="ts">
import type { AccuracyCalculatorDatabaseItem } from '~/types/accuracy-calculator'

interface AccuracyData {
	readonly name: AccuracyCalculatorDatabaseItem['data'][number]['name']
	readonly notes: AccuracyCalculatorDatabaseItem['data'][number]['notes']
	readonly accuracy: number
}
</script>

<script lang="ts" setup>
import '~/styles/transitions/fade.scss'
import { isEmpty, isNonNullish, isNullish, last, map, pipe, prop, round, sum } from 'remeda'
import database from '~/core/shared/data/accuracy-calculator/database'
import isMobile from '~/core/shared/isMobile'

const data = ref<AccuracyData[]>([])
const passRequirePercentage = ref(1)

const preset = ref<AccuracyCalculatorDatabaseItem>()

watch(preset, item => {
	if (isNullish(item)) {
		data.value = []
		passRequirePercentage.value = 1

		return
	}

	data.value = []

	item.data.forEach(song => {
		data.value.push({
			name: song.name,
			notes: song.notes,
			accuracy: 0
		})
	})

	passRequirePercentage.value = item.passRequirePercentage
})

const totalNotes = computed(() => {
	return pipe(
		data.value,
		map(
			prop('notes')
		),
		sum()
	)
})

const results = computed(() => {
	const filteredData: AccuracyData[] = []

	for (const item of data.value) {
		if (isNullish(item.accuracy) || item.accuracy <= 0) {
			break
		}

		filteredData.push(item)
	}

	return pipe(
		filteredData,
		map((item, index) => {
			const currentAccuracy = round(item.accuracy, 2)

			if (index <= 0) {
				return currentAccuracy
			}

			const totalNotes = pipe(
				data.value.slice(0, index + 1),
				map(
					prop('notes')
				),
				sum(),
				notes => Number(notes)
			)

			const historyTotalNotes = pipe(
				data.value.slice(0, index),
				map(
					prop('notes')
				),
				sum(),
				notes => Number(notes)
			)

			const previousAccuracy = round(data.value[index - 1].accuracy, 2)

			const currentNumerator = currentAccuracy * totalNotes
			const previousNumerator = previousAccuracy * historyTotalNotes

			return round((currentNumerator - previousNumerator) / data.value[index].notes, 2)
		})
	)
})

const add = () => {
	data.value.push({
		name: {
			english: '',
			original: null
		},
		notes: 1,
		accuracy: 0
	})
}

const confirm = useConfirm()
const toast = useToast()

const remove = (event: MouseEvent, index: number) => {
	confirm.require({
		target: event.currentTarget! as HTMLElement,
		message: '真删 ?',
		icon: 'i-twemoji:thinking-face',
		rejectProps: {
			label: '取消',
			severity: 'secondary',
			outlined: true
		},
		acceptProps: {
			label: '对'
		},
		accept: () => {
			data.value.splice(index, 1)

			toast.add({
				severity: 'success',
				summary: 'OK',
				detail: '删除成功!',
				life: 1000
			})
		}
	})
}

definePageMeta({
	name: 'acc 计算器'
})

console.log(data)
</script>

<template>
	<shared-subpage>
		<Toast/>
		<ConfirmPopup/>

		<div class="flex flex-col gap-2">
			<Panel :collapsed="true" header="预设" toggleable>
				<div class="w-full">
					<Listbox v-model="preset" :options="database" filter optionLabel="name"/>
				</div>
			</Panel>

			<Panel :collapsed="true" header="编辑器" toggleable>
				<div class="flex flex-col gap-2">
					<IftaLabel>
						<InputNumber v-model.number="passRequirePercentage" :max="100" :min="0" :step="1" suffix="%"/>
						<label>过段要求</label>
					</IftaLabel>

					<Divider/>

					<template v-for="(item, index) in data">
						<div class="flex items-center gap-2">
							<span class="text-xl font-bold">第 {{ index + 1 }} 首</span>

							<div class="flex flex-1 flex-col gap-2">
								<IftaLabel>
									<Textarea v-model="item.name!.original" auto-resize/>
									<label>歌曲名</label>
								</IftaLabel>

								<IftaLabel>
									<Textarea v-model="item.name!.english" auto-resize/>
									<label>英文名</label>
								</IftaLabel>
							</div>

							<IftaLabel>
								<InputNumber v-model="item.notes" :min="1" :step="1" auto-resize/>
								<label>物量</label>
							</IftaLabel>

							<Button :dt="{ padding: 0 }" variant="text" @click="e => remove(e, index)">
								<template #icon>
									<div class="text-2xl text-red-500 i-ant-design:delete-outlined"/>
								</template>
							</Button>
						</div>

						<template v-if="data.length !== index + 1">
							<Divider/>
						</template>
					</template>

					<Button fluid severity="secondary" @click="add">添加</Button>
				</div>
			</Panel>

			<Panel :dt="{ 'header.padding': 0, 'content.padding': '0.5rem' }">
				<div class="my-10">
					<Transition appear mode="out-in" name="fade">
						<template v-if="data.length <= 0">
							<div class="flex justify-center">
								<Message class="w-fit" severity="error">
									还没有歌曲, 看看上面的编辑器吧
								</Message>
							</div>
						</template>

						<template v-else>
							<div class="flex flex-col gap-2">
								<template v-for="(item, index) in data">
									<div :class="{ 'flex-col': isMobile }" class="flex justify-center items-center gap-2">
										<div v-if="isNonNullish(item.name)" class="flex flex-col">
											<span v-if="!isEmpty(item.name.english)">{{ item.name.english }}</span>
											<span v-if="isNonNullish(item.name.original) && !isEmpty(item.name.original)" class="text-xs opacity-50">{{ item.name.original }}</span>
										</div>

										<IftaLabel>
											<InputNumber v-model="item.accuracy" :max="100" :max-fraction-digits="2" :min="0" :min-fraction-digits="2" :step="0.01" class="w-fit" mode="decimal" suffix="%"/>
											<label>出第 {{ index + 1 }} 首歌时的 acc</label>
										</IftaLabel>

										<span class="text-sm opacity-50">{{ item.notes }} 物量 ({{ round(item.notes / totalNotes * 100, 2) }}%)</span>

										<template v-if="isMobile && data.length !== index + 1">
											<Divider/>
										</template>
									</div>
								</template>

								<template v-if="results.length > 0">
									<div class="mt-10">
										<div class="flex flex-col gap-2">
											<div class="flex justify-center items-center gap-2">
												<TransitionGroup appear mode="out-in" name="fade">
													<template v-for="(result, index) in results">
														<Message :severity="(result >= passRequirePercentage ? 'success' : 'error')" class="w-fit">{{ result }}%</Message>

														<Transition appear mode="out-in" name="fade">
															<template v-if="results.length !== index + 1">
																<span>→</span>
															</template>
														</Transition>
													</template>
												</TransitionGroup>
											</div>

											<Transition appear mode="out-in" name="fade">
												<template v-if="results.length === data.length">
													<div class="mt-10 flex justify-center">
														<template v-if="last(data)!.accuracy >= passRequirePercentage">
															<div :class="{ 'w-1/3': !isMobile }" class="bg-green-600 rounded p-6 cursor-pointer">
																<div class="text-4xl flex justify-center">
																	<div class="w-fit animate-spin animate-duration-800ms hover:animate-duration-1ms">
																		<span>过了!</span>
																	</div>
																</div>
															</div>
														</template>

														<template v-else>
															<div :class="{ 'w-1/3': !isMobile }" class="bg-red-600 rounded p-5">
																<div class="text-sm font-bold flex justify-center">
																	<span>好可惜, 就差 {{ round(passRequirePercentage - last(data)!.accuracy, 2) }}%</span>
																</div>
															</div>
														</template>
													</div>
												</template>
											</Transition>
										</div>
									</div>
								</template>
							</div>
						</template>
					</Transition>
				</div>
			</Panel>
		</div>
	</shared-subpage>
</template>

<style lang="scss">
@keyframes passed {
	0%, 100% {
		@apply scale-100;
	}

	50% {
		@apply scale-120;
	}

	100% {
		@apply rotate-360;
	}
}
</style>