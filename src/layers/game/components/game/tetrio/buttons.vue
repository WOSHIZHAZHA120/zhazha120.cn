<script lang="ts" setup>
import tetrio from '~/shared/tetrio/data'
import isMobile from '~/shared/isMobile'
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<Button :dt="{ padding: 0 }" :fluid="isMobile" :href="(`https://ch.tetr.io/u/${tetrio.id}`)" as="a" label="看我" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:user-outlined"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://cdn.zhazha120.cn/download/tetrio_skin.tpse" label="拿我皮肤" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:download-outlined"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://cdn.zhazha120.cn/download/tetrio_config.ttc" label="拿我设置" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:download-outlined"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://cdn.zhazha120.cn/download/tetrio_background.webp" label="拿我背景" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:download-outlined"/>
			</template>
		</Button>
	</div>
</template>