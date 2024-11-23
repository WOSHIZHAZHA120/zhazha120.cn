<template>
	<div class="flex <sm:(flex-col) gap-5">
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
				</div>
			</Panel>
		</div>

		<div class="flex-1">
			<Panel header="在线工具">
				<div class="flex <sm:(flex-col) gap-2">

				</div>
			</Panel>
		</div>
	</div>
</template>