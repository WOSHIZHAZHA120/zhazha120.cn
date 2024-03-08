<script lang="ts" setup>
import avatar_noobteam_v2dot5 from '~/assets/avatar_noobteam_v2dot5.png'

const rank = {
	jack: ['Extra', 2].join(' '),
	tech: ['Extra', 4].join(' '),
	speed: ['Extra', 2].join(' '),
	stream: ['Extra', 2].join(' '),
	ln: '?'
}

const passedDan = [
	{
		name: 'Regular 0',
		date: '2023/11/24',
		video_id: 'BV1ub4y1T77n'
	},
	{
		name: 'Regular 1',
		date: '2023/11/24',
		video_id: 'BV1nc411r7xQ'
	},
	{
		name: 'Regular 2',
		date: '2023/11/24',
		video_id: 'BV1Nc411z7pE'
	},
	{
		name: 'Regular 3',
		date: '2023/11/24',
		video_id: 'BV1rb4y1u74j'
	},
	{
		name: 'Regular 4',
		date: '2023/1/9',
		video_id: 'BV18v4y1v7ov'
	},
	{
		name: 'Regular 5',
		date: '2023/1/11',
		video_id: 'BV1uv4y1i78V'
	},
	{
		name: 'Regular 6',
		date: '2023/1/22',
		video_id: 'BV1eM411t7Px'
	},
	{
		name: 'Regular 7',
		date: '2023/2/14',
		video_id: 'BV1qv4y1s7xu'
	},
	{
		name: 'Regular 8',
		date: '2023/3/26',
		video_id: 'BV18k4y147CV'
	},
	{
		name: 'Regular 9',
		date: '2023/5/5',
		video_id: 'BV1Bs4y137wb'
	},
	{
		name: 'Regular 10',
		date: '2023/5/10',
		video_id: 'BV1Hs4y1u7SU'
	},
	{
		name: 'Extra 1',
		date: '2023/11/12',
		video_id: 'BV1Hs4y1u7SU'
	},
	{
		name: 'Extra 2',
		date: '2023/11/17',
		video_id: 'BV1Dw411H7Gr'
	},
	{
		name: 'Extra 3',
		date: '2023/12/3',
		video_id: 'BV1Lu4y1V7kW'
	}
]
</script>

<template>
	<n-card size='small' title='Malody'>
		<template #header-extra>
			<n-button href='http://m.mugzone.net/accounts/user/239697' tag='a' text type='primary'>
				个人主页
			</n-button>
		</template>

		<n-space vertical>
			<n-descriptions :columns='4' bordered class='text-center' label-align='center'>
				<n-descriptions-item label='Jack'>
					<n-text type='info'>{{ rank.jack }}</n-text>
				</n-descriptions-item>

				<n-descriptions-item label='Tech'>
					<n-text type='info'>{{ rank.tech }}</n-text>
				</n-descriptions-item>

				<n-descriptions-item label='Speed'>
					<n-text type='info'>{{ rank.speed }}</n-text>
				</n-descriptions-item>

				<n-descriptions-item label='Stream'>
					<n-text type='info'>{{ rank.stream }}</n-text>
				</n-descriptions-item>

				<n-descriptions-item label='LN'>
					<n-text type='info'>{{ rank.ln }}</n-text>
				</n-descriptions-item>
			</n-descriptions>

			<n-element class='overflow-auto'>
				<n-scrollbar x-scrollable>
					<n-timeline class='w-max pb-5' horizontal>
						<template v-for="passedDanInfo in passedDan">
							<n-timeline-item :time='passedDanInfo.date' :title='passedDanInfo.name' type='success'>
								<n-button :href='(`https://www.bilibili.com/video/${passedDanInfo.video_id}`)' tag="a"
										  text type="primary">
									视频传送门
								</n-button>
							</n-timeline-item>
						</template>
					</n-timeline>
				</n-scrollbar>
			</n-element>
		</n-space>

		<template #footer>
			<n-space align="center">
				<n-text class="fw-bold">活动</n-text>

				<n-popover animated>
					<template #trigger>
						<n-image :src="avatar_noobteam_v2dot5" class="[&>img]:w-20"/>
					</template>

					Noob Team v2.5 头像
				</n-popover>
			</n-space>
		</template>

		<template #action>
			<n-button href="https://cdn.zhazha120.cn/download/malody_skin.msz" tag="a">
				下载我当前使用的 Malody 皮肤
			</n-button>
		</template>
	</n-card>
</template>