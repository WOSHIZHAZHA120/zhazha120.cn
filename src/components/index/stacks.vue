<script lang="ts" setup>
import { groupBy, prop } from 'remeda'

const stacks = [
	{
		type: '开发环境',
		name: 'IntelliJ IDEA',
		icon: 'i-logos:intellij-idea',
		website: 'https://www.jetbrains.com/idea'
	},
	{
		type: '开发环境',
		name: 'WebStorm',
		icon: 'i-logos:webstorm',
		website: 'https://www.jetbrains.com/webstorm'
	},
	{
		type: '开发环境',
		name: 'PhpStorm',
		icon: 'i-logos:phpstorm',
		website: 'https://www.jetbrains.com/phpstorm'
	},
	{
		type: '开发环境',
		name: 'Rider',
		icon: 'i-logos:rider',
		website: 'https://www.jetbrains.com/rider'
	},
	{
		type: '开发环境',
		name: 'Visual Studio',
		icon: 'i-logos:visual-studio',
		website: 'https://visualstudio.com'
	},
	{
		type: '开发环境',
		name: 'Visual Studio Code',
		icon: 'i-logos:visual-studio-code',
		website: 'https://code.visualstudio.com'
	},
	{
		type: '前端',
		name: 'Yarn',
		icon: 'i-logos:yarn',
		website: 'https://yarnpkg.com'
	},
	{
		type: '前端',
		name: 'Pnpm',
		icon: 'i-logos:pnpm',
		website: 'https://pnpm.io'
	},
	{
		type: '前端',
		name: 'TypeScript',
		icon: 'i-devicon:typescript',
		website: 'https://typescriptlang.org'
	},
	{
		type: '前端',
		name: 'Vite',
		icon: 'i-logos:vitejs',
		website: 'https://vitejs.dev'
	},
	{
		type: '前端',
		name: 'Sass & Scss',
		icon: 'i-logos:sass',
		website: 'https://sass-lang.com'
	},
	{
		type: '前端',
		name: 'TailwindCSS',
		icon: 'i-devicon:tailwindcss',
		website: 'https://tailwindcss.com'
	},
	{
		type: '前端',
		name: 'UnoCSS',
		icon: 'i-logos:unocss',
		website: 'https://unocss.dev'
	},
	{
		type: '前端',
		name: 'Vue',
		icon: 'i-logos:vue',
		website: 'https://vuejs.org'
	},
	{
		type: '前端',
		name: 'Naive UI',
		icon: 'i-logos:naiveui',
		website: 'https://naiveui.com'
	},
	{
		type: '后端',
		name: 'Node.js',
		icon: 'i-devicon:nodejs',
		website: 'https://nodejs.org'
	},
	{
		type: '后端',
		name: 'C#',
		icon: 'i-devicon:csharp',
		website: 'https://learn.microsoft.com/zh-cn/dotnet/csharp'
	},
	{
		type: '后端',
		name: 'Java',
		icon: 'i-logos:java',
		website: 'https://java.com'
	},
	{
		type: '后端',
		name: 'PHP',
		icon: 'i-logos:php',
		website: 'https://php.net'
	},
	{
		type: '后端',
		name: 'Composer',
		icon: 'i-logos:composer',
		website: 'https://getcomposer.org'
	},
	{
		type: '后端',
		name: 'Laravel',
		icon: 'i-logos:laravel',
		website: 'https://laravel.com'
	},
	{
		type: '后端',
		name: 'MariaDB',
		icon: 'i-devicon:mariadb',
		website: 'https://mariadb.org'
	},
	{
		type: '后端',
		name: 'PostgreSQL',
		icon: 'i-logos:postgresql',
		website: 'https://postgresql.org'
	},
	{
		type: '其他',
		name: 'Docker',
		icon: 'i-devicon:docker',
		website: 'https://docker.com'
	},
	{
		type: '其他',
		name: 'Podman',
		icon: 'i-devicon:podman',
		website: 'https://podman.io'
	}
]

const groupedStacks = groupBy(stacks, prop('type'))
const groupCount = Object.keys(groupedStacks).length
</script>

<template>
	<n-grid :cols='(`1 s:${groupCount}`)' :x-gap='10' :y-gap='10' class='[&_.n-card]:h-full' responsive='screen'>
		<template v-for="(items, type) in groupedStacks">
			<n-grid-item>
				<n-card :title="type" size="small">
					<n-space align='center' size='small'>
						<template v-for="item in items">
							<n-popover animated>
								<template #trigger>
									<n-button :href='item.website' tag='a' text>
										<div :class="(`text-3xl ${item.icon}`)"/>
									</n-button>
								</template>

								{{ item.name }}
							</n-popover>
						</template>
					</n-space>
				</n-card>
			</n-grid-item>
		</template>
	</n-grid>
</template>