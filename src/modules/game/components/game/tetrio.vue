<script lang="ts" setup>
import isMobile from '~/shared/isMobile'
</script>

<template>
	<Panel :collapsed="true" header="tetr.io" toggleable>
		<div class="flex flex-col gap-2">
			<game-tetrio-timelines/>

			<template v-if="!isMobile">
				<game-tetrio-overlay/>
			</template>

			<game-tetrio-background/>
		</div>

		<template #footer>
			<game-tetrio-buttons/>
		</template>
	</Panel>
</template>