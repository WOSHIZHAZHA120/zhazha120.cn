<script lang="ts" setup>
import avatar_nanmandbteam_v1 from '~/assets/avatar_nanmandbteam_v1.png'
import avatar_noobteam_v2dot5 from '~/assets/avatar_noobteam_v2dot5.png'
import avatar_tetrisstudy_v1 from '~/assets/avatar_tetrisstudy_v1.png'

definePageMeta({
	name: '画廊'
})

const imageWidth = 200
</script>

<template>
	<subpage>
		<n-card size="small">
			<n-flex vertical>
				<n-text strong type="info">一些活动奖品 - 头像</n-text>

				<n-flex align="center">
					<gallery-avatar :src="avatar_noobteam_v2dot5" name="Noob Team V2.5">
						<template #footer>
							立绘来源:
							<n-button href="https://www.pixiv.net/artworks/113932174" tag="a" text type="primary">
								pixiv#113932174
							</n-button>
						</template>
					</gallery-avatar>

					<gallery-avatar :src="avatar_nanmandbteam_v1" name="NanmanDB Team V1">
						<template #footer>
							立绘来源:
							<n-button href="https://www.pixiv.net/artworks/105172613" tag="a" text type="primary">
								pixiv#105172613
							</n-button>
						</template>
					</gallery-avatar>

					<gallery-avatar :src="avatar_tetrisstudy_v1" name="Tetris Study V1">
						<template #footer>
							立绘来源:
							<n-button href="https://www.pixiv.net/artworks/105063844" tag="a" text type="primary">
								pixiv#105063844
							</n-button>
						</template>
					</gallery-avatar>
				</n-flex>
			</n-flex>
		</n-card>
	</subpage>
</template>