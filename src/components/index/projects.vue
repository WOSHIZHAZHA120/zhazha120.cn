<script lang="ts" setup>
import project_1 from '~/assets/project_1.png'
import project_2 from '~/assets/project_2.png'
import project_3 from '~/assets/project_3.png'
import { GITHUB_BASE_URL } from '~/core/shared'

const projects = [
	{
		preview: project_1,
		owner: 'Geometry-Dash-Chinese',
		repository: 'geometrydashchinese.com'
	},
	{
		preview: project_2,
		owner: 'Geometry-Dash-Chinese',
		repository: 'Geometry-Dash-Chinese'
	},
	{
		preview: project_3,
		owner: '26F-Studio',
		repository: 'techmino-online-dict'
	}
]
</script>

<template>
	<n-grid :x-gap="10" :y-gap="10" cols='1 s:3' responsive='screen'>
		<template v-for="project in projects">
			<n-grid-item>
				<n-button :href='(`${GITHUB_BASE_URL}/${project.owner}/${project.repository}`)' tag='a' text>
					<n-image :src='project.preview' class='[&>img]:w-full transition-transform hover:scale-105'
							 preview-disabled/>
				</n-button>
			</n-grid-item>
		</template>
	</n-grid>
</template>