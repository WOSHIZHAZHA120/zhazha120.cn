<script lang="ts" setup></script>

<template>
	<Panel :collapsed="true" header="tetr.io" toggleable>
		<div class="flex flex-col gap-2">
			<game-tetrio-timelines/>
			<game-tetrio-overlay/>
			<game-tetrio-background/>
		</div>

		<template #footer>
			<game-tetrio-buttons/>
		</template>
	</Panel>
</template>