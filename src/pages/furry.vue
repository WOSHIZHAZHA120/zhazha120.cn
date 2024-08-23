<script lang="ts" setup>
import _1 from '~/assets/furry/1.png'
import _2 from '~/assets/furry/2.png'
import _3 from '~/assets/furry/3.png'

definePageMeta({
	name: '兽设'
})

const imageWidth = 200
</script>

<template>
	<subpage>
		<n-card size="small">
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
			</n-flex>
		</n-card>
	</subpage>
</template>