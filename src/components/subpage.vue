<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>

<template>
	<n-flex vertical>
		<n-page-header :title='route.name' @back='router.back'/>

		<slot>
			<n-empty/>
		</slot>
	</n-flex>
</template>