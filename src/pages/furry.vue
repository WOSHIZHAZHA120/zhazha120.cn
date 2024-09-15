<script lang="ts" setup>
import _1 from '~/assets/furry/1.webp'
import _2 from '~/assets/furry/2.webp'
import _3 from '~/assets/furry/3.webp'
import _4 from '~/assets/furry/4.webp'
import _5 from '~/assets/furry/5.webp'
import _6 from '~/assets/furry/6.webp'

definePageMeta({
	name: '兽设'
})
</script>

<template>
	<subpage>
		<n-flex vertical>
			<n-card>
				<n-flex>
					<n-image :img-props="{ class: 'h-90' }" :src="_6"/>

					<div>
						<n-h2 class="my-0">这是一只小狗, 特点是腿部的闪电</n-h2>
						<n-text>(待补充)</n-text>
					</div>
				</n-flex>
			</n-card>

			<n-card size="small" title="画廊">
				<n-flex align="center">
					<gallery-avatar :src="_1" name="无衣服">
						<template #footer>
							<n-button href="https://space.bilibili.com/1981236068" tag="a" text type="primary">
								🎨: 初晴沐雨
							</n-button>
						</template>
					</gallery-avatar>

					<gallery-avatar :src="_2" name="有衣服">
						<template #footer>
							<n-button href="https://space.bilibili.com/1981236068" tag="a" text type="primary">
								🎨: 初晴沐雨
							</n-button>
						</template>
					</gallery-avatar>

					<gallery-avatar :src="_3" name="双试图">
						<template #footer>
							<n-button href="https://space.bilibili.com/1981236068" tag="a" text type="primary">
								🎨: 初晴沐雨
							</n-button>
						</template>
					</gallery-avatar>

					<gallery-avatar :src="_4" name="无偿">
						<template #footer>
							🎨: 诺辞
						</template>
					</gallery-avatar>

					<gallery-avatar :src="_5" name="qq 兽速途">
						<template #footer>
							<n-button href="https://www.mihuashi.com/profiles/1806467" tag="a" text type="primary">
								🎨: 小雷RAIN
							</n-button>
						</template>
					</gallery-avatar>
				</n-flex>
			</n-card>
		</n-flex>
	</subpage>
</template>

<style lang="scss">
@import '~/styles/transitions/fade';
</style>