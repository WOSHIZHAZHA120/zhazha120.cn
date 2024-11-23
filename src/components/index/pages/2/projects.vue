<script lang="ts" setup>
import project_1 from '~/assets/project_1.webp'
import project_2 from '~/assets/project_2.webp'
</script>

<template>
	<div class="flex <sm:(flex-col) gap-5">
		<div class="flex-1">
			<Panel header="Techmino 在线词典">
				<div class="flex flex-col gap-5">
					<Image :src="project_1" alt="预览" image-class="w-full" preview/>

					<div class="flex <sm:(flex-col) justify-center gap-2">
						<Button as="a" class="<sm:(w-full) no-underline" href="https://26f-studio.github.io/techmino-online-dict" label="访问" severity="secondary" size="small">
							<template #icon>
								<div class="i-ant-design:link-outlined"/>
							</template>
						</Button>

						<Button as="a" class="<sm:(w-full) no-underline" href="https://github.com/26F-Studio/techmino-online-dict" label="源代码" severity="secondary" size="small">
							<template #icon>
								<div class="i-simple-icons:github"/>
							</template>
						</Button>
					</div>
				</div>
			</Panel>
		</div>

		<div class="flex-1">
			<Panel header="Endless Services">
				<div class="flex flex-col gap-5">
					<Image :src="project_2" alt="预览" image-class="w-full" preview/>

					<div class="flex <sm:(flex-col) justify-center gap-2">
						<Button as="a" class="<sm:(w-full) no-underline" href="https://endless-services.zhazha120.cn" label="访问" severity="secondary" size="small">
							<template #icon>
								<div class="i-ant-design:link-outlined"/>
							</template>
						</Button>

						<Button as="a" class="<sm:(w-full) no-underline" href="https://github.com/Endless-Spike-Studio/Endless-Services-Runtime" label="源代码 (运行时)" severity="secondary" size="small">
							<template #icon>
								<div class="i-simple-icons:github"/>
							</template>
						</Button>

						<Button as="a" class="<sm:(w-full) no-underline" href="https://github.com/Endless-Spike-Studio/Endless-Services-Frontend" label="源代码 (前端)" severity="secondary" size="small">
							<template #icon>
								<div class="i-simple-icons:github"/>
							</template>
						</Button>

						<Button as="a" class="<sm:(w-full) no-underline" href="https://github.com/Endless-Spike-Studio/Endless-Services-Backend" label="源代码 (后端)" severity="secondary" size="small">
							<template #icon>
								<div class="i-simple-icons:github"/>
							</template>
						</Button>
					</div>
				</div>
			</Panel>
		</div>
	</div>
</template>