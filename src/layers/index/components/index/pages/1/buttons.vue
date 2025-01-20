<script lang="ts" setup>
import isMobile from '~/shared/isMobile'
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://wpa.qq.com/msgrd?v=3&uin=2331281251" label="QQ" severity="secondary" size="small">
			<template #icon>
				<div class="i-simple-icons:tencentqq"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="mailto://WOSHIZHAZHA120@qq.com" label="邮箱" severity="secondary" size="small">
			<template #icon>
				<div class="i-simple-icons:maildotru"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://space.bilibili.com/24267334" label="哔哩哔哩" severity="secondary" size="small">
			<template #icon>
				<div class="i-simple-icons:bilibili"/>
			</template>
		</Button>

		<Button :dt="{ padding: 0 }" :fluid="isMobile" as="a" href="https://github.com/WOSHIZHAZHA120" label="Github" severity="secondary" size="small">
			<template #icon>
				<div class="i-simple-icons:github"/>
			</template>
		</Button>
	</div>
</template>