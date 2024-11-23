<script lang="ts" setup>
defineProps<{
	readonly title?: string
}>()

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
	<div class="pt-5 flex flex-col gap-2">
		<Toolbar>
			<template #start>
				<Button as="a" class="no-underline !p-0" href="javascript:" label="返回" link severity="secondary" @click="handleBack">
					<template #icon>
						<div class="i-ant-design:left-outlined"/>
					</template>
				</Button>
			</template>

			<template #center>
				{{ title ?? route.name }}
			</template>
		</Toolbar>

		<slot/>
	</div>
</template>