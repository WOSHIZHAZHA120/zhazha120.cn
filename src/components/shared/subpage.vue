<script lang="ts" setup>
import { isNullish } from 'remeda'
import isMobile from '~/shared/isMobile'

const route = useRoute()
const router = useRouter()

const props = defineProps<{
	readonly title?: string
}>()

const handleBack = () => {
	if (history.length <= 1) {
		router.push('/')
		return
	}

	router.back()
}

const title = computed(() => {
	if (isNullish(props.title)) {
		return route.name
	}

	return props.title
})

const titleSlot = computed(() => {
	if (isMobile.value) {
		return 'end'
	}

	return 'center'

})
</script>

<template>
	<div class="pt-2">
		<div class="flex flex-col gap-2">
			<Toolbar :dt="{ padding: 0 }">
				<template #start>
					<Button label="返回" severity="secondary" size="small" variant="link" @click="handleBack">
						<template #icon>
							<div class="i-ant-design:left-outlined"/>
						</template>
					</Button>
				</template>

				<template #[titleSlot]>
					<div :class="{ 'mr-2': isMobile }">
						<span class="text-sm">{{ title }}</span>
					</div>
				</template>
			</Toolbar>

			<slot/>
		</div>
	</div>
</template>