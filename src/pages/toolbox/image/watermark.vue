<script lang="ts" setup>
import { toBlob } from 'html-to-image'
import type { UploadFileInfo } from 'naive-ui'
import { first, isNullish } from 'remeda'

definePageMeta({
	name: '水印添加工具'
})

const list = ref<UploadFileInfo[]>([])

const uploaded = computed(() => {
	return first(list.value)
})

const clearSelect = () => {
	list.value = []
}

const uploadedUrl = computed(() => {
	if (isNullish(uploaded.value) || isNullish(uploaded.value.file)) {
		return
	}

	return URL.createObjectURL(uploaded.value.file)
})

const config = reactive({
	debug: false,
	cross: true,
	content: '渣渣120',
	'font-size': 16,
	'font-family': 'HarmonyOS Sans SC',
	'font-color': 'rgba(128, 128, 128, .3)',
	'font-weight': 600,
	width: 64,
	height: 48,
	rotate: 0,
	'global-rotate': -15,
	'x-gap': 0,
	'y-gap': 0,
	'x-offset': 0,
	'y-offset': 15
})

const container = ref<HTMLDivElement>()

const save = async () => {
	if (isNullish(container.value)) {
		return
	}

	if (isNullish(uploaded.value)) {
		return
	}

	const blob = await toBlob(container.value)

	if (isNullish(blob)) {
		return
	}

	const a = document.createElement('a')
	a.href = URL.createObjectURL(blob)
	a.download = uploaded.value.name
	a.click()
}
</script>

<template>
	<subpage>
		<n-card>
			<template v-if="isNullish(uploaded)">
				<n-upload v-model:file-list="list" :default-upload="false" :max="1" :multiple="false" accept="image/*">
					<n-upload-dragger>
						<n-flex vertical>
							<n-text class="text-6">点击或者拖动文件到该区域来上传</n-text>

							<n-text :depth="3">我们不会存储您的任何文件, 整个操作只会在前端完成</n-text>
						</n-flex>
					</n-upload-dragger>
				</n-upload>
			</template>

			<template v-else>
				<n-flex vertical>
					<n-button block secondary @click="clearSelect">重新选择</n-button>

					<n-flex justify="space-evenly">
						<n-form-item label="调试">
							<n-switch v-model:value="config.debug"/>
						</n-form-item>

						<n-form-item label="可越界">
							<n-switch v-model:value="config.cross"/>
						</n-form-item>

						<n-form-item label="内容">
							<n-input v-model:value="config.content"/>
						</n-form-item>

						<n-form-item label="字体">
							<n-input v-model:value="config['font-family']"/>
						</n-form-item>

						<n-form-item label="字重">
							<n-input-number v-model:value="config['font-weight']" :min="1" :step="1"/>
						</n-form-item>

						<n-form-item label="字体大小">
							<n-input-number v-model:value="config['font-size']" :min="1" :step="1"/>
						</n-form-item>

						<n-form-item class="w-64" label="字体颜色">
							<n-color-picker v-model:value="config['font-color']"/>
						</n-form-item>

						<n-form-item label="格子宽度">
							<n-input-number v-model:value="config.width" :min="1" :step="1"/>
						</n-form-item>

						<n-form-item label="格子高度">
							<n-input-number v-model:value="config.height" :min="1" :step="1"/>
						</n-form-item>
					</n-flex>

					<n-flex justify="space-evenly">
						<n-form-item label="X 间距">
							<n-input-number v-model:value="config['x-gap']" :step="1"/>
						</n-form-item>

						<n-form-item label="Y 间距">
							<n-input-number v-model:value="config['y-gap']" :step="1"/>
						</n-form-item>

						<n-form-item label="X 偏移">
							<n-input-number v-model:value="config['x-offset']" :step="1"/>
						</n-form-item>

						<n-form-item label="Y 偏移">
							<n-input-number v-model:value="config['y-offset']" :step="1"/>
						</n-form-item>
					</n-flex>

					<n-flex justify="center">
						<div ref="container" class="relative">
							<n-image ref="image" :src="uploadedUrl" class="size-full"/>

							<n-watermark
								:content="config.content"
								:cross="config.cross"
								:debug="config.debug"
								:font-color="config['font-color']"
								:font-family="config['font-family']"
								:font-size="config['font-size']"
								:font-weight="config['font-weight']"
								:global-rotate="config['global-rotate']"
								:height="config.height"
								:rotate="config.rotate"
								:width="config.width"
								:x-gap="config['x-gap']"
								:x-offset="config['x-offset']"
								:y-gap="config['y-gap']"
								:y-offset="config['y-offset']"
								class="absolute top-0 left-0 size-full"
							/>
						</div>
					</n-flex>

					<n-flex justify="center">
						<n-button @click="save">保存</n-button>
					</n-flex>
				</n-flex>
			</template>
		</n-card>
	</subpage>
</template>