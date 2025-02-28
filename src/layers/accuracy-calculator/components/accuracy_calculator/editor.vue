<script lang="ts" setup>
import { ConfirmPopup, IftaLabel, Toast } from 'primevue'
import type { AccuracyData } from '~/types/accuracy-calculator'

const data = defineModel<AccuracyData[]>('data', {
	required: true
})

const passRequirePercentage = defineModel<number>('pass-require-percentage', {
	required: true
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
		target: event.currentTarget as HTMLElement,
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
</script>

<template>
	<div class="flex flex-col gap-2">
		<Toast/>
		<ConfirmPopup/>

		<IftaLabel>
			<InputText v-model="passRequirePercentage" :allow-empty="false" :format="false" :max="100" :min="0" :step="1" show-buttons suffix="%"/>
			<label>过段要求</label>
		</IftaLabel>

		<Divider/>

		<TransitionGroup appear mode="out-in" name="fade">
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
						<InputNumber v-model="item.notes" :allow-empty="false" :format="false" :min="1" :step="1" show-buttons/>
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
		</TransitionGroup>

		<Button fluid severity="secondary" @click="add">添加</Button>
	</div>
</template>

<style lang="scss">
@use '~/styles/transitions/fade';
</style>