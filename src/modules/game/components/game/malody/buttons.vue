<script lang="ts" setup>
import isMobile from '~/shared/isMobile'
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://m.mugzone.net/accounts/user/239697" label="看我" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:user-outlined"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://cdn.zhazha120.cn/download/malody_skin.msz" label="拿我皮肤" severity="secondary" size="small">
			<template #icon>
				<div class="i-ant-design:download-outlined"/>
			</template>
		</Button>
	</div>
</template>