<script lang="ts" setup>
import tools_links from '~/shared/tools_links'
import useful_links from '~/shared/useful_links'
import isMobile from '~/shared/isMobile'
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

					<template v-for="useful_link in useful_links">
						<template v-if="useful_link.is_external">
							<Button :fluid="isMobile" :href="useful_link.href" :label="useful_link.name" as="a" severity="secondary" size="small">
								<template #icon>
									<div :class="useful_link.icon_class"/>
								</template>
							</Button>
						</template>

						<template v-else>
							<router-link v-slot="{ navigate }" :to="useful_link.href" custom>
								<Button :fluid="isMobile" :href="useful_link.href" :label="useful_link.name" as="a" severity="secondary" size="small" @click="navigate">
									<template #icon>
										<div :class="useful_link.icon_class"/>
									</template>
								</Button>
							</router-link>
						</template>
					</template>
				</div>
			</Panel>
		</div>

		<div class="flex-1">
			<Panel header="在线工具">
				<div class="flex flex-wrap gap-2">
					<template v-for="tools_link in tools_links">
						<template v-if="tools_link.is_external">
							<Button :fluid="isMobile" :href="tools_link.href" :label="tools_link.name" as="a" severity="secondary" size="small">
								<template #icon>
									<div :class="tools_link.icon_class"/>
								</template>
							</Button>
						</template>

						<template v-else>
							<router-link v-slot="{ navigate }" :to="tools_link.href" custom>
								<Button :fluid="isMobile" :href="tools_link.href" :label="tools_link.name" as="a" severity="secondary" size="small" @click="navigate">
									<template #icon>
										<div :class="tools_link.icon_class"/>
									</template>
								</Button>
							</router-link>
						</template>
					</template>
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