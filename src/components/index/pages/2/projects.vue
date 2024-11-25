<script lang="ts" setup>
import projects from '~/core/shared/data/projects'
import isMobile from '~/core/shared/isMobile'
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<template v-for="project in projects">
			<div :class="[isMobile ? 'w-full' : 'flex-1']">
				<Panel :header="project.name">
					<div class="flex flex-col gap-2">
						<Image :src="project.preview_image" alt="预览" image-class="w-full" preview/>

						<div class="w-full flex flex-wrap justify-center gap-2">
							<template v-for="link in project.links">
								<Button :fluid="isMobile" :href="link.href" :label="link.label" as="a" severity="secondary" size="small">
									<template #icon>
										<div :class="link.icon_class"/>
									</template>
								</Button>
							</template>
						</div>
					</div>
				</Panel>
			</div>
		</template>
	</div>
</template>