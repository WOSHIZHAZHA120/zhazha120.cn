<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { pipe, sortBy } from 'remeda'

const id = '5eb3a6530b29196c155074e8'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')

const overlay_params = computed(() => {
	return Object.entries({
		username: id,
		'display-name': true,
		'display-level': true,
		'display-role': true,
		'display-badge': true,
		'display-rank': true,
		'display-league': true,
		'display-sprint': true,
		'display-blitz': true,
		'display-standingsets': true,
		'display-standingsets-sprint': true,
		'display-standingsets-blitz': true,
		alignment: 'top',
		layout: isMobile.value ? 'vertical' : 'horizontal',
		league: ['apm', 'pps', 'vs', 'x_winrate', 'percentile'].join('+'),
		sprint: ['pieces', 'pps', 'ff', 'kpp', 'kps', 'quads'].join('+'),
		blitz: ['pps', 'ff', 'spp', 'pieces', 'pieces', 'quads', 'tspins', 'allclears'].join('+')
	}).map(option => {
		return option.join('=')
	}).join('&')
})

const records = {
	'40l': [
		{
			description: 'sub60',
			date: '2022/4/30'
		},
		{
			description: 'sub50',
			date: '2022/7/18'
		},
		{
			description: 'sub45',
			date: '2022/9/21'
		},
		{
			description: 'sub40',
			date: '2022/11/9'
		},
		{
			description: 'sub35',
			date: '2022/11/28'
		},
		{
			description: 'sub30',
			date: '2023/2/9'
		},
		{
			description: 'sub25',
			date: '2023/8/23'
		},
		{
			description: 'sub24',
			date: '2023/9/21'
		},
		{
			description: 'sub23',
			date: '2024/3/6'
		},
		{
			description: 'sub22',
			date: '2024/6/5'
		},
		{
			description: 'sub21.5',
			date: '2024/8/5'
		}
	],
	blitz: [
		{
			description: '30w',
			date: '2023/8/19'
		}
	],
	s1_rank: [
		{
			name: 'A+',
			date: '2022/4/30'
		},
		{
			name: 'S',
			date: '2022/5/22'
		},
		{
			name: 'S+',
			date: '2022/7/18'
		},
		{
			name: 'SS',
			date: '2022/8/17'
		},
		{
			name: 'U',
			date: '2022/12/11'
		},
		{
			name: 'X',
			date: '2023/11/2'
		}
	],
	s2_rank: [
		{
			name: 'A+',
			date: '2024/8/17'
		},
		{
			name: 'S-',
			date: '2024/8/17'
		},
		{
			name: 'S',
			date: '2024/8/17'
		},
		{
			name: 'S+',
			date: '2024/8/17'
		},
		{
			name: 'SS',
			date: '2024/8/17'
		},
		{
			name: 'U',
			date: '2024/8/18'
		},
		{
			name: 'X',
			date: '2024/9/9'
		}
	]
}

const mergedRecords = pipe(
	[
		...records['40l'].map(record => {
			return {
				...record,
				title: `40L ${record.description}`,
				type: 'info'
			}
		}),
		...records['blitz'].map(record => {
			return {
				...record,
				title: `Blitz ${record.description}`,
				type: 'warning'
			}
		}),
		...records['s1_rank'].map(record => {
			return {
				...record,
				title: `S1 Rank ${record.name}`,
				type: 'success'
			}
		}),
		...records['s2_rank'].map(record => {
			return {
				...record,
				title: `S2 Rank ${record.name}`,
				type: 'success'
			}
		})
	],
	sortBy(record => {
		return new Date(record.date)
	})
)
</script>

<template>
	<n-card size='small' title='tetr.io'>
		<template #header-extra>
			<n-button :href='(`https://ch.tetr.io/u/${id}`)' tag='a' text type='primary'>
				个人主页
			</n-button>
		</template>

		<n-element class='mx-auto'>
			<iframe :src='(`https://tetr.fires.bz/overlay/user?${overlay_params}`)'
					class='border-none w-full'/>
		</n-element>

		<n-element class='overflow-auto'>
			<n-scrollbar x-scrollable>
				<n-timeline class='w-max pb-5' horizontal>
					<template v-for="record in mergedRecords">
						<n-timeline-item :time='record.date' :title='record.title' :type='record.type'/>
					</template>
				</n-timeline>
			</n-scrollbar>
		</n-element>

		<template #action>
			<n-flex align='center'>
				<n-button href="https://cdn.zhazha120.cn/download/tetrio_background.webp" tag="a">
					下载我当前使用的 tetr.io 背景
				</n-button>

				<n-button href="https://cdn.zhazha120.cn/download/tetrio_config.ttc" tag="a">
					下载我当前使用的 tetr.io 设置
				</n-button>

				<n-button href="https://cdn.zhazha120.cn/download/tetrio_skin.tpse" tag="a">
					下载我当前使用的 tetr.io 皮肤 (需要 tetr.io plus)
				</n-button>
			</n-flex>
		</template>
	</n-card>
</template>