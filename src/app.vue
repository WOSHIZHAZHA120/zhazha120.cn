<script lang="ts" setup>
import '~/styles/global.scss'
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator/>

		<div class="container mx-auto">
			<NuxtPage/>
		</div>

		<div class="position-(fixed bottom-0) w-full">
			<div class="flex justify-center p-2 bg-[#222] opacity-50 transition-(opacity duration-200) hover:opacity-100">
				&copy; 2024 - {{ new Date().getFullYear() }}
				<Divider class="!p-0" layout="vertical"/>
				<Button as="a" class="no-underline !p-0" href="https://beian.miit.gov.cn" link>
					赣 ICP 备 2022005275 号
				</Button>
				<Divider class="!p-0" layout="vertical"/>
				<Button as="a" class="no-underline !p-0" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36070202001088" link>
					赣公网安备 36070202001088 号
				</Button>
			</div>
		</div>
	</NuxtLayout>
</template>