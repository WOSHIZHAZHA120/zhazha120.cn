<script lang="ts" setup>
import avatar from '~/assets/avatar_main.png'
</script>

<template>
	<n-flex vertical>
		<n-flex :size="0" align='center' vertical>
			<n-image :src='avatar'
					 class="[&>img]:w-20 rounded-full transition-(transform duration-1000) hover:rotate-[360deg]"/>
			<n-text class='text-3xl fw-bold'>渣渣120</n-text>
		</n-flex>

		<div class="text-center">
			<n-text class='text-2xl fw-bold' type='info'>
				也许是一名不合格的全栈开发者
				<br>
				喜欢自动化和新技术
			</n-text>
		</div>

		<n-flex class="mb-2" justify="center">
			<n-image
				src="https://img.shields.io/endpoint?style=for-the-badge&url=https://api.codetime.dev/shield?id=2270"/>
		</n-flex>
	</n-flex>
</template>