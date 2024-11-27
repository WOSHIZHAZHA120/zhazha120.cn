<script lang="ts" setup>
import passed_dans from '~/core/shared/data/malody/passed_dans'
import isMobile from '~/core/shared/isMobile'
</script>

<template>
	<Timeline :value="passed_dans" align="alternate">
		<template #content="slotProps">
			<Card :dt="{ 'body.padding': 0 }">
				<template #title>
					<span class="text-sm font-bold">
						{{ slotProps.item.name }}
					</span>
				</template>

				<template #subtitle>
					<div class="-mt-3">
						<span class="text-xs">
							{{ slotProps.item.date }}
						</span>
					</div>
				</template>

				<template #content>
					<template v-if="isMobile">
						<Button :dt="{ padding: 0 }" :fluid="isMobile" :href="(`https://bilibili.com/video/${slotProps.item.bilibili_video_id}`)" as="a" label="看过段视频" severity="secondary" size="small">
							<template #icon>
								<div class="i-carbon:video-player"/>
							</template>
						</Button>
					</template>

					<template v-else>
						<iframe :src="(`https://player.bilibili.com/player.html?bvid=${slotProps.item.bilibili_video_id}&autoplay=false`)" class="border-none w-full aspect-video"/>
					</template>
				</template>
			</Card>
		</template>
	</Timeline>
</template>