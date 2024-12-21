<script lang="ts" setup>
import isMobile from '~/shared/isMobile'
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://osu.ppy.sh/users/16303789/mania" label="看我" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:user-outlined"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://cdn.zhazha120.cn/download/osu_skin.osk" label="拿我皮肤" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:download-outlined"/>
			</template>
		</Button>
	</div>
</template>