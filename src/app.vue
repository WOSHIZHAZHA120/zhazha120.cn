<script lang="ts" setup>
import { darkTheme, dateZhCN, lightTheme, useOsTheme, zhCN } from 'naive-ui'
import avatar from '~/assets/avatar_main.webp'

const osTheme = useOsTheme()
const theme = computed(() => {
	switch (osTheme.value) {
		case 'light':
			return lightTheme
		case 'dark':
			return darkTheme
		default:
			return null
	}
})

useHead({
	link: [
		{
			rel: 'icon',
			href: avatar
		}
	]
})
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator/>

		<n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="theme">
			<n-dialog-provider>
				<n-loading-bar-provider>
					<n-message-provider>
						<n-modal-provider>
							<n-notification-provider>
								<n-layout position="absolute">
									<n-layout-content class="container mx-auto">
										<NuxtPage class="<sm:(px-2) py-10"/>
									</n-layout-content>

									<n-layout-footer class="p-2" position="absolute">
										<n-flex :size="0" align="center" vertical>
											<n-text>&copy; 2023 - {{ new Date().getFullYear() }}</n-text>

											<n-button href='https://beian.miit.gov.cn' tag='a' text>
												<n-text :depth="3" class="hover:text-current">
													赣 ICP 备 2022005275 号
												</n-text>
											</n-button>

											<n-button href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=36070202001088" tag="a" text>
												<n-text :depth="3" class="hover:text-current">
													赣公网安备 36070202001088 号
												</n-text>
											</n-button>
										</n-flex>
									</n-layout-footer>
								</n-layout>
							</n-notification-provider>
						</n-modal-provider>
					</n-message-provider>
				</n-loading-bar-provider>
			</n-dialog-provider>
		</n-config-provider>
	</NuxtLayout>
</template>

<style lang="scss">
@import '~/styles/transitions/page.scss';
</style>