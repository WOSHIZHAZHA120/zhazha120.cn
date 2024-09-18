<script lang="ts" setup>
import { createReusableTemplate } from '@vueuse/core'
import _1 from '~/assets/furry/1.webp'
import _2 from '~/assets/furry/2.webp'
import _3 from '~/assets/furry/3.webp'
import _4 from '~/assets/furry/4.webp'
import _5 from '~/assets/furry/5.webp'
import _6 from '~/assets/furry/6.webp'
import ColorPickMode from '~/core/shared/enums/ColorPickMode'
import isMobile from '~/core/shared/isMobile'

definePageMeta({
	name: '兽设'
})

const currentColorPickerMode = ref(ColorPickMode.HEX)
const { define: ColorsDefine, reuse: Colors } = createReusableTemplate()
</script>

<template>
	<subpage>
		<n-flex vertical>
			<n-card>
				<n-flex justify="space-between">
					<n-flex :justify="(isMobile ? 'center' : 'start')" size="small">
						<n-image :img-props="{ class: 'h-90' }" :src="_6"/>

						<div>
							<n-h3 class="my-0">赛博小狗</n-h3>
							<n-text>其特点是腿部的闪电, 有蓝黄色的大以巴</n-text>
						</div>
					</n-flex>

					<n-flex :align="(isMobile ? 'start' : 'end')" :class="(isMobile ? 'w-full' : 'h-90')" :vertical="!isMobile" :wrap="!isMobile">
						<n-radio-group v-model:value="currentColorPickerMode" size="small">
							<n-radio-button :value="ColorPickMode.RGB">RGB</n-radio-button>
							<n-radio-button :value="ColorPickMode.HEX">HEX</n-radio-button>
						</n-radio-group>

						<ColorsDefine>
							<furry-color :b="255" :g="255" :mode="currentColorPickerMode" :r="255"/>
							<furry-color :b="255" :g="216" :mode="currentColorPickerMode" :r="0"/>
							<furry-color :b="255" :g="131" :mode="currentColorPickerMode" :r="0"/>
							<furry-color :b="0" :g="246" :mode="currentColorPickerMode" :r="255"/>
							<furry-color :b="255" :g="224" :mode="currentColorPickerMode" :r="111"/>
							<furry-color :b="0" :g="195" :mode="currentColorPickerMode" :r="255"/>
						</ColorsDefine>

						<template v-if="isMobile">
							<div class="grid grid-cols-6 w-full h-10">
								<Colors/>
							</div>
						</template>

						<template v-else>
							<div class="grid grid-rows-6 w-10 h-full">
								<Colors/>
							</div>
						</template>
					</n-flex>
				</n-flex>
			</n-card>

			<n-card size="small" title="画廊">
				<n-flex>
					<gallery-image :src="_1">
						<template #footer>
							<n-flex align="center" justify="space-between">
								<n-text>无衣服</n-text>
								<n-button href="https://space.bilibili.com/1981236068" tag="a" text type="primary">
									🎨 初晴沐雨
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="_2">
						<template #footer>
							<n-flex align="center" justify="space-between">
								<n-text>有衣服</n-text>
								<n-button href="https://space.bilibili.com/1981236068" tag="a" text type="primary">
									🎨 初晴沐雨
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="_3">
						<template #footer>
							<n-flex align="center" justify="space-between">
								<n-text>双视图</n-text>
								<n-button href="https://space.bilibili.com/1981236068" tag="a" text type="primary">
									🎨 初晴沐雨
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="_4">
						<template #footer>
							<n-flex align="center" justify="space-between">
								<n-text>无偿</n-text>
								<n-button href="https://wpa.qq.com/msgrd?uin=257250992" tag="a" text type="primary">
									🎨 诺辞
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="_5">
						<template #footer>
							<n-flex align="center" justify="space-between">
								<n-button href="https://www.mihuashi.com/stalls/348580" tag="a" text type="primary">qq 兽速途</n-button>
								<n-button href="https://www.mihuashi.com/profiles/1806467" tag="a" text type="primary">
									🎨 小雷RAIN
								</n-button>
							</n-flex>
						</template>
					</gallery-image>
				</n-flex>
			</n-card>
		</n-flex>
	</subpage>
</template>

<style lang="scss">
@import '~/styles/transitions/fade';
</style>