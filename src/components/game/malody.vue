<template>
	<Panel :collapsed="true" header="Malody" toggleable>
		<div class="flex flex-col gap-2">
			<game-malody-levels/>
			<game-malody-timelines/>
		</div>

		<template #footer>
			<game-malody-buttons/>
		</template>
	</Panel>
</template>