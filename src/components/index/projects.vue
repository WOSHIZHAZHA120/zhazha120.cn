<script lang="ts" setup>
import { GithubOutlined, LinkOutlined } from '@vicons/antd'
import project_1 from '~/assets/project_1.png'
import project_2 from '~/assets/project_2.png'
import project_3 from '~/assets/project_3.png'
import project_4 from '~/assets/project_4.png'

const projects = [
	{
		preview: project_1,
		name: '几何冲刺玩家网',
		owner: 'Geometry-Dash-Chinese',
		repository: 'geometrydashchinese.com',
		website: 'https://geometrydashchinese.com'
	},
	{
		preview: project_2,
		name: 'Geometry Dash Chinese',
		owner: 'Geometry-Dash-Chinese',
		repository: 'Geometry-Dash-Chinese',
		website: 'https://gf.geometrydashchinese.com'
	},
	{
		preview: project_3,
		name: 'Techmino 在线词典',
		owner: '26F-Studio',
		repository: 'techmino-online-dict',
		website: 'https://dev.studio26f.org/techmino-online-dict'
	},
	{
		preview: project_4,
		name: '方块工具箱',
		owner: '26F-Studio',
		repository: 'toolbox',
		website: 'https://dev.studio26f.org/toolbox'
	}
]
</script>

<template>
	<n-grid :x-gap="10" :y-gap="10" cols='1 s:4' responsive='screen'>
		<template v-for="project in projects">
			<n-grid-item class="relative">
				<n-image :src='project.preview'
						 class='[&>img]:w-full transition-transform hover:scale-105'
						 preview-disabled/>

				<div
					class="absolute top-0 left-0 w-full h-full sm:(opacity-0 hover:opacity-100) bg-black bg-opacity-80 transition-opacity">
					<div class="absolute top-1/2 left-1/2 -translate-1/2">
						<n-flex vertical>
							<div class="text-center">
								<n-text class="fw-bold">{{ project.name }}</n-text>
							</div>

							<n-button :href="project.website" tag="a">
								<template #icon>
									<n-icon :component="LinkOutlined"/>
								</template>

								访问
							</n-button>

							<n-button :href='(`https://github.com/${project.owner}/${project.repository}`)' tag='a'>
								<template #icon>
									<n-icon :component="GithubOutlined"/>
								</template>

								Github
							</n-button>
						</n-flex>
					</div>
				</div>
			</n-grid-item>
		</template>
	</n-grid>
</template>