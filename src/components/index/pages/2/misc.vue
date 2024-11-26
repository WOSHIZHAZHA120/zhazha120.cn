<script lang="ts" setup>
import isMobile from '~/core/shared/isMobile'

const supportPage = useLink({
	to: '/support'
})

const gamePage = useLink({
	to: '/game'
})

const furryPage = useLink({
	to: '/furry'
})
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<div class="flex-1">
			<Panel header="有用的链接">
				<div class="flex flex-wrap gap-2">
					<Button :fluid="isMobile" as="a" href="https://status.zhazha120.cn" label="监控" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:monitor-outlined"/>
						</template>
					</Button>

					<Button :fluid="isMobile" as="a" href="https://qm.qq.com/cgi-bin/qm/qr?k=J0VLGhPqQMYw8j6u4v5_-o4o-gnwA6MW&authKey=G7bGP4NM1k0MO/kH+xKVlEjk9gbR2AOXCxMRDjtrqQSDxwQvAxGdseQ1uyhj9nNb" label="粉丝群" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:usergroup-add-outlined"/>
						</template>
					</Button>

					<Button :fluid="isMobile" :href="supportPage.href.value" :label="String(supportPage.route.value.name)" as="a" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:heart-outlined"/>
						</template>
					</Button>

					<Button :fluid="isMobile" :href="gamePage.href.value" :label="String(gamePage.route.value.name)" as="a" severity="secondary" size="small">
						<template #icon>
							<div class="i-tabler:device-gamepad"/>
						</template>
					</Button>

					<Button :fluid="isMobile" :href="furryPage.href.value" :label="String(furryPage.route.value.name)" as="a" severity="secondary" size="small">
						<template #icon>
							<div class="i-tabler:paw"/>
						</template>
					</Button>
				</div>
			</Panel>
		</div>

		<div class="flex-1">
			<Panel header="在线工具">
				<div class="flex flex-wrap gap-2">
					<Button v-tooltip.top="('翻新中')" :fluid="isMobile" disabled label="acc 计算器" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:calculator-outlined"/>
						</template>
					</Button>
				</div>
			</Panel>
		</div>

		<div class="w-full">
			<Panel header="关于此网站">
				<div class="flex flex-wrap">
					<Button :fluid="isMobile" as="a" href="https://github.com/WOSHIZHAZHA120/zhazha120.cn" label="源代码" severity="secondary" size="small">
						<template #icon>
							<div class="i-simple-icons:github"/>
						</template>
					</Button>
				</div>
			</Panel>
		</div>
	</div>
</template>