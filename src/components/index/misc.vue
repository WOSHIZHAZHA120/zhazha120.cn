<script lang="ts" setup>
import { DeviceGamepad } from '@vicons/tabler'
</script>

<template>
	<n-space justify="center">
		<router-link v-slot="{ route, navigate }" to="/game">
			<n-button tertiary @click="navigate">
				<template #icon>
					<n-icon :component='DeviceGamepad'/>
				</template>

				{{ route.name }}
			</n-button>
		</router-link>
	</n-space>
</template>