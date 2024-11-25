import project_1 from 'assets/project_1.webp'
import project_2 from 'assets/project_2.webp'
import type Project from '~/types/project'

// @unocss-include

export default [
	{
		name: 'Techmino 在线词典',
		preview_image: project_1,
		links: [
			{
				label: '访问',
				icon_class: 'i-ant-design:link-outlined',
				href: 'https://26f-studio.github.io/techmino-online-dict'
			},
			{
				label: '源代码',
				icon_class: 'i-simple-icons:github',
				href: 'https://github.com/26F-Studio/techmino-online-dict'
			}
		]
	},
	{
		name: 'Endless Services',
		preview_image: project_2,
		links: [
			{
				label: '访问',
				icon_class: 'i-ant-design:link-outlined',
				href: 'https://endless-services.zhazha120.cn'
			},
			{
				label: '源代码 (运行时)',
				icon_class: 'i-simple-icons:github',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Runtime'
			},
			{
				label: '源代码 (前端)',
				icon_class: 'i-simple-icons:github',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Frontend'
			},
			{
				label: '源代码 (后端)',
				icon_class: 'i-simple-icons:github',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Backend'
			},
			{
				label: '源代码 (连接器)',
				icon_class: 'i-simple-icons:github',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Connector'
			}
		]
	}
] satisfies Project[]