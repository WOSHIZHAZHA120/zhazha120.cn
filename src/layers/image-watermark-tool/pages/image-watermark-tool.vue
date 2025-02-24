<script setup lang="ts">
import { asyncComputed } from '@vueuse/core'
import dom2image from 'dom-to-image'
import { NWatermark, type WatermarkProps } from 'naive-ui'
import { isEmpty, isNonNullish, isNullish } from 'remeda'

const container = ref<HTMLDivElement>()
const image = ref<File>()

const imageSrc = asyncComputed(() => {
	if (isNullish(image.value)) {
		return null
	}

	return new Promise(resolve => {
		const fileReader = new FileReader()

		fileReader.addEventListener('loadend', () => {
			if (!isNullish(fileReader.result)) {
				resolve(fileReader.result)
			}
		}, {
			once: true
		})

		fileReader.readAsDataURL(image.value as Blob)
	})
})

const imageDimensions = asyncComputed(() => {
	if (isNullish(imageSrc.value)) {
		return null
	}

	return new Promise<[number, number]>(resolve => {
		const _image = new Image()

		_image.addEventListener('load', () => {
			resolve([_image.naturalWidth, _image.naturalHeight])
		}, {
			once: true
		})

		_image.src = imageSrc.value as string
	})
})

const sizes = computed(() => {
	const dimensions = imageDimensions.value

	if (isNullish(dimensions)) {
		return null
	}

	return {
		width: dimensions[0] + 'px',
		height: dimensions[1] + 'px'
	}
})

const selectImage = () => {
	const input = document.createElement('input')

	input.type = 'file'
	input.accept = 'image/*'
	input.multiple = false

	input.addEventListener('change', () => {
		if (isNonNullish(input.files) && !isEmpty(input.files)) {
			image.value = input.files[0]
		}
	}, {
		once: true
	})

	input.click()
}

const watermark = reactive<WatermarkProps>({
	content: '渣渣120',
	cross: true,
	debug: false,
	fontSize: 20,
	fontFamily: 'HarmonyOS Sans SC',
	fontStyle: 'normal',
	fontVariant: '',
	fontWeight: 400,
	fontColor: 'rgba(128, 128, 128, .3)',
	fullscreen: false,
	globalRotate: 0,
	lineHeight: 10,
	height: 40,
	image: '',
	imageHeight: 0,
	imageOpacity: 1,
	imageWidth: 0,
	rotate: -15,
	selectable: true,
	textAlign: 'left',
	width: 160,
	xGap: 0,
	xOffset: 0,
	yGap: 0,
	yOffset: 25,
	zIndex: 10
})

const download = async () => {
	if (isNullish(container.value) || isNullish(imageDimensions.value)) {
		return
	}

	const url = await dom2image.toPng(container.value, {
		width: imageDimensions.value[0],
		height: imageDimensions.value[1]
	})

	const a = document.createElement('a')

	a.download = 'out.png'
	a.href = url
	a.click()
}

definePageMeta({
	name: '图片水印工具'
})
</script>

<template>
	<Panel :dt="{ 'header.padding': 0, 'content.padding': '0.5rem' }">
		<div class="flex flex-col gap-2">
			<Button fluid severity="secondary" @click="selectImage">选择图片</Button>

			<template v-if="isNonNullish(image) && isNonNullish(imageDimensions)">
				<div class="flex flex-wrap justify-center gap-2">
					<IftaLabel>
						<InputText v-model="watermark.content"/>
						<label>水印文本</label>
					</IftaLabel>

					<ToggleButton v-model="watermark.cross">是否跨越边界显示</ToggleButton>

					<ToggleButton v-model="watermark.debug">是否显示调试信息</ToggleButton>

					<IftaLabel>
						<InputText v-model="watermark.fontSize"/>
						<label>字体大小</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.fontFamily"/>
						<label>字体族</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.fontStyle"/>
						<label>字体风格</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.fontVariant"/>
						<label>字型</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.fontWeight"/>
						<label>字重</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.fontColor"/>
						<label>字体颜色</label>
					</IftaLabel>

					<ToggleButton v-model="watermark.fullscreen">是否展示全屏</ToggleButton>

					<IftaLabel>
						<InputText v-model="watermark.globalRotate"/>
						<label>水印整体的旋转</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.lineHeight"/>
						<label>行高</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.height"/>
						<label>高度</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.image"/>
						<label>图片路径</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.imageHeight"/>
						<label>图片高度</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.imageOpacity"/>
						<label>图片不透明度</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.imageWidth"/>
						<label>图片宽度</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.rotate"/>
						<label>旋转角度</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.selectable"/>
						<label>被水印覆盖的内容是否可选中</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.textAlign"/>
						<label>在文本有多行的情况下，多行文本的对齐方式</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.width"/>
						<label>宽度</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.xGap"/>
						<label>x 轴间隔</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.xOffset"/>
						<label>x 轴偏移</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.yGap"/>
						<label>y 轴间隔</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.yOffset"/>
						<label>y 轴偏移</label>
					</IftaLabel>

					<IftaLabel>
						<InputText v-model="watermark.zIndex"/>
						<label>z 轴高度</label>
					</IftaLabel>
				</div>

				<div ref="container" class="relative overflow-scroll">
					<div :style="sizes">
						<n-watermark
							class="absolute top-0 left-0"
							:style="sizes"
							:content="watermark.content"
							:cross="watermark.cross"
							:debug="watermark.debug"
							:font-size="watermark.fontSize"
							:font-family="watermark.fontFamily"
							:font-style="watermark.fontStyle"
							:font-variant="watermark.fontVariant"
							:font-weight="watermark.fontWeight"
							:font-color="watermark.fontColor"
							:fullscreen="watermark.fullscreen"
							:global-rotate="watermark.globalRotate"
							:line-height="watermark.lineHeight"
							:height="watermark.height"
							:image="watermark.image"
							:image-height="watermark.imageHeight"
							:image-opacity="watermark.imageOpacity"
							:image-width="watermark.imageWidth"
							:rotate="watermark.rotate"
							:selectable="watermark.selectable"
							:text-align="watermark.textAlign"
							:width="watermark.width"
							:x-gap="watermark.xGap"
							:x-offset="watermark.xOffset"
							:y-gap="watermark.yGap"
							:y-offset="watermark.yOffset"
							:z-index="watermark.zIndex"
						/>

						<Image :src="imageSrc" alt="预览" :image-style="sizes" image-class="absolute top-0 left-0" preview/>
					</div>
				</div>

				<Button fluid severity="secondary" @click="download">下载</Button>
			</template>
		</div>
	</Panel>
</template>