<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const handleBack = () => {
	if (history.length <= 1) {
		router.push('/')
		return
	}

	router.back()
}
</script>

<template>
	<n-flex vertical>
		<n-page-header :title='route.name' @back='handleBack()'/>

		<slot>
			<n-empty/>
		</slot>
	</n-flex>
</template>