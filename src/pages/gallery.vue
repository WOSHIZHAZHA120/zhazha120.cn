<script lang="ts" setup>
import avatar_grandtourer_en from '~/assets/avatar_grandtourer_en.webp'
import avatar_grandtourer_zh from '~/assets/avatar_grandtourer_zh.webp'
import avatar_nanmandbteam_v1 from '~/assets/avatar_nanmandbteam_v1.webp'
import avatar_noobteam_v2dot5 from '~/assets/avatar_noobteam_v2dot5.webp'
import avatar_tetrisstudy_v1 from '~/assets/avatar_tetrisstudy_v1.webp'

definePageMeta({
	name: '画廊'
})

const furryPage = useLink({
	to: '/furry'
})
</script>

<template>
	<subpage>
		<n-card size="small">
			<n-flex vertical>
				<n-text strong type="info">一些活动奖品 - 头像</n-text>

				<n-flex align="center">
					<gallery-image :src="avatar_noobteam_v2dot5">
						<template #footer>
							<n-flex align="start" size="small" vertical>
								<n-text>Noob Team V2.5</n-text>
								<n-button href="https://www.pixiv.net/artworks/113932174" tag="a" text type="primary">
									角色: pixiv#113932174
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="avatar_nanmandbteam_v1">
						<template #footer>
							<n-flex align="start" size="small" vertical>
								<n-text>NanmanDB Team V1</n-text>
								<n-button href="https://www.pixiv.net/artworks/105172613" tag="a" text type="primary">
									角色: pixiv#105172613
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="avatar_tetrisstudy_v1">
						<template #footer>
							<n-flex align="start" size="small" vertical>
								<n-text>Tetris Study V1</n-text>
								<n-button href="https://www.pixiv.net/artworks/105063844" tag="a" text type="primary">
									角色: pixiv#105063844
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="avatar_grandtourer_en">
						<template #footer>
							<n-flex align="start" size="small" vertical>
								<n-text>Grand Tourer 英文</n-text>
								<n-button :href="furryPage.href" tag="a" text type="primary">
									角色: 我家狗
								</n-button>
							</n-flex>
						</template>
					</gallery-image>

					<gallery-image :src="avatar_grandtourer_zh">
						<template #footer>
							<n-flex align="start" size="small" vertical>
								<n-text>Grand Tourer 中文</n-text>
								<n-button :href="furryPage.href" tag="a" text type="primary">
									角色: 我家狗
								</n-button>
							</n-flex>
						</template>
					</gallery-image>
				</n-flex>
			</n-flex>
		</n-card>
	</subpage>
</template>