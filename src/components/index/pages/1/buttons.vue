<template>
	<div class="flex flex-wrap <sm:(justify-evenly) items-center gap-2">
		<Button as="a" class="<sm:(w-full) no-underline" href="https://wpa.qq.com/msgrd?v=3&uin=2331281251" label="QQ" severity="secondary">
			<template #icon>
				<div class="icon-btn i-simple-icons:tencentqq"/>
			</template>
		</Button>

		<Button as="a" class="<sm:(w-full) no-underline" href="mailto://WOSHIZHAZHA120@qq.com" label="邮箱" severity="secondary">
			<template #icon>
				<div class="icon-btn i-simple-icons:maildotru"/>
			</template>
		</Button>

		<Button as="a" class="<sm:(w-full) no-underline" href="https://space.bilibili.com/24267334" label="哔哩哔哩" severity="secondary">
			<template #icon>
				<div class="icon-btn i-simple-icons:bilibili"/>
			</template>
		</Button>

		<Button as="a" class="<sm:(w-full) no-underline" href="https://github.com/WOSHIZHAZHA120" label="Github" severity="secondary">
			<template #icon>
				<div class="icon-btn i-simple-icons:github"/>
			</template>
		</Button>
	</div>
</template>