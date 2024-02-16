<template>
	<n-space vertical>
		<n-page-header :title='$route.name' @back='$router.back'/>

		<slot>
			<n-empty/>
		</slot>
	</n-space>
</template>