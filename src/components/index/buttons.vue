<script lang="ts" setup>
import {
	FileImageOutlined,
	GithubOutlined,
	HeartOutlined,
	MailOutlined,
	MonitorOutlined,
	QqOutlined,
	ToolOutlined,
	UsergroupAddOutlined
} from '@vicons/antd'
import { DeviceGamepad } from '@vicons/tabler'
import { NButton, NIcon } from 'naive-ui'
import { isVNode } from 'vue'

const supportPage = useLink({
	to: '/support'
})

const galleryPage = useLink({
	to: '/gallery'
})

const gamePage = useLink({
	to: '/game'
})

const toolboxPage = useLink({
	to: '/toolbox'
})

const buttons = [
	[
		{
			name: 'QQ',
			icon: QqOutlined,
			link: 'https://wpa.qq.com/msgrd?uin=2331281251'
		},
		{
			name: '邮箱',
			icon: MailOutlined,
			link: `mailto://WOSHIZHAZHA120@qq.com`
		},
		{
			name: '哔哩哔哩',
			icon: h('div', {
				class: 'i-simple-icons:bilibili'
			}),
			link: 'https://space.bilibili.com/24267334'
		},
		{
			name: 'Github',
			icon: GithubOutlined,
			link: `https://github.com/WOSHIZHAZHA120`
		}
	],
	[
		{
			name: '监控',
			icon: MonitorOutlined,
			link: 'https://status.zhazha120.cn'
		},
		{
			name: '粉丝群',
			icon: UsergroupAddOutlined,
			link: 'https://qm.qq.com/cgi-bin/qm/qr?k=J0VLGhPqQMYw8j6u4v5_-o4o-gnwA6MW&authKey=G7bGP4NM1k0MO/kH+xKVlEjk9gbR2AOXCxMRDjtrqQSDxwQvAxGdseQ1uyhj9nNb'
		},
		h(NButton, {
			onClick: () => supportPage.navigate()
		}, {
			icon: () => h(NIcon, {
				component: HeartOutlined
			}),
			default: () => supportPage.route.value.name
		})
	],
	[
		h(NButton, {
			onClick: () => galleryPage.navigate()
		}, {
			icon: () => h(NIcon, {
				component: FileImageOutlined
			}),
			default: () => galleryPage.route.value.name
		}),
		h(NButton, {
			onClick: () => gamePage.navigate()
		}, {
			icon: () => h(NIcon, {
				component: DeviceGamepad
			}),
			default: () => gamePage.route.value.name
		}),
		h(NButton, {
			onClick: () => toolboxPage.navigate()
		}, {
			icon: () => h(NIcon, {
				component: ToolOutlined
			}),
			default: () => toolboxPage.route.value.name
		})
	]
]
</script>

<template>
	<n-flex justify="center" vertical>
		<template v-for="line in buttons">
			<n-flex justify='center'>
				<template v-for="item in line">
					<Component :is="item" v-if="isVNode(item)"/>

					<n-button v-else :href='item.link' tag='a'>
						<template #icon>
							<n-icon :component='item.icon'/>
						</template>

						{{ item.name }}
					</n-button>
				</template>
			</n-flex>
		</template>
	</n-flex>
</template>