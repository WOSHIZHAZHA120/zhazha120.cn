<template>
	<div class="flex flex-wrap <sm:(flex-col) gap-5">
		<div class="flex-1">
			<Panel header="有用的链接">
				<div class="flex <sm:(flex-col) gap-2">
					<Button as="a" class="<sm:(w-full) no-underline" href="https://status.zhazha120.cn" label="监控" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:monitor-outlined"/>
						</template>
					</Button>

					<Button as="a" class="<sm:(w-full) no-underline" href="https://qm.qq.com/cgi-bin/qm/qr?k=J0VLGhPqQMYw8j6u4v5_-o4o-gnwA6MW&authKey=G7bGP4NM1k0MO/kH+xKVlEjk9gbR2AOXCxMRDjtrqQSDxwQvAxGdseQ1uyhj9nNb" label="粉丝群" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:usergroup-add-outlined"/>
						</template>
					</Button>

					<router-link v-slot="{ route }" to="/support">
						<Button :href="route.href" :label="String(route.name)" as="a" class="<sm:(w-full) no-underline" severity="secondary" size="small">
							<template #icon>
								<div class="i-ant-design:heart-outlined"/>
							</template>
						</Button>
					</router-link>

					<Button v-tooltip.top="('翻新中')" class="<sm:(w-full) no-underline" disabled label="画廊" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:file-image-outlined"/>
						</template>
					</Button>

					<Button v-tooltip.top="('翻新中')" class="<sm:(w-full) no-underline" disabled label="游戏" severity="secondary" size="small">
						<template #icon>
							<div class="i-tabler:device-gamepad"/>
						</template>
					</Button>

					<Button v-tooltip.top="('翻新中')" class="<sm:(w-full) no-underline" disabled label="兽设" severity="secondary" size="small">
						<template #icon>
							<div class="i-tabler:paw"/>
						</template>
					</Button>
				</div>
			</Panel>
		</div>

		<div class="flex-1">
			<Panel header="在线工具">
				<div class="flex <sm:(flex-col) gap-2">
					<Button v-tooltip.top="('翻新中')" class="<sm:(w-full) no-underline" disabled label="图片水印工具" severity="secondary" size="small">
						<template #icon>
							<div class="i-tabler:image-in-picture"/>
						</template>
					</Button>

					<Button v-tooltip.top="('翻新中')" class="<sm:(w-full) no-underline" disabled label="acc 计算器" severity="secondary" size="small">
						<template #icon>
							<div class="i-ant-design:calculator-outlined"/>
						</template>
					</Button>
				</div>
			</Panel>
		</div>

		<div class="w-full">
			<Panel header="关于此网站">
				<div class="flex <sm:(flex-col) gap-2">
					<Button as="a" class="<sm:(w-full) no-underline" href="https://github.com/WOSHIZHAZHA120/zhazha120.cn" label="源代码" severity="secondary" size="small">
						<template #icon>
							<div class="i-simple-icons:github"/>
						</template>
					</Button>
				</div>
			</Panel>
		</div>
	</div>
</template>