<template>
	<Panel :collapsed="true" header="osu! mania" toggleable>
		<div class="flex flex-col gap-2">
			<game-osu_mania-levels/>
			<game-osu_mania-card/>
		</div>

		<template #footer>
			<game-osu_mania-buttons/>
		</template>
	</Panel>
</template>