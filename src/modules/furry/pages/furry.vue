<script lang="ts" setup>
import furry_1 from '~/assets/furry_1.webp'
import isMobile from '~/shared/isMobile'

definePageMeta({
	name: '兽设'
})
</script>

<template>
	<shared-subpage>
		<Panel header="[暂无名称] (狗)">
			<div :class="{ 'flex-col items-center': isMobile }" class="flex gap-2">
				<Image :src="furry_1" alt="展示" image-class="h-90" preview/>
				<span>其特点是腿部的闪电, 有蓝黄色的大以巴</span>
			</div>
		</Panel>
	</shared-subpage>
</template>