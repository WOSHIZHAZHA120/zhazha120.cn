<script lang="ts" setup>
import isMobile from '~/shared/isMobile'
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator/>

		<div class="container mx-auto p-2">
			<NuxtPage/>
		</div>

		<div class="mt-4 p-2 position-sticky bottom-2 z-120">
			<div class="flex justify-center">
				<Panel :dt="{ 'header.padding': 0, 'content.padding': '0.5rem' }">
					<div :class="{ 'leading-none': isMobile }" class="flex flex-wrap justify-center items-center">
						<span class="text-xs">&copy; 2024 - {{ new Date().getFullYear() }}</span>

						<template v-if="!isMobile">
							<Divider :dt="{ 'vertical.margin': '0 0.5rem' }" layout="vertical"/>
						</template>

						<Button :dt="{ 'sm.padding.x': 0, 'sm.padding.y': 0 }" :fluid="isMobile" as="a" href="https://beian.miit.gov.cn" size="small" variant="link">
							赣 ICP 备 2022005275 号
						</Button>

						<template v-if="!isMobile">
							<Divider :dt="{ 'vertical.margin': '0 0.5rem' }" layout="vertical"/>
						</template>

						<Button :dt="{ 'sm.padding.x': 0, 'sm.padding.y': 0 }" :fluid="isMobile" as="a" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36070202001088" size="small" variant="link">
							赣公网安备 36070202001088 号
						</Button>
					</div>
				</Panel>
			</div>
		</div>
	</NuxtLayout>
</template>

<style lang="scss">
:root, html, body {
	@apply m-0 p-0 font-sans;
}

a {
	@apply no-underline;
}
</style>

<style lang="scss">
@use '~/styles/transitions/page';
</style>