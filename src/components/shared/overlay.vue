<template>
	<div class="relative">
		<slot name="trigger"/>

		<div class="absolute top-0 left-0 size-full">
			<div class="size-full transition-opacity opacity-0 hover:(opacity-100)">
				<div class="size-full sm:bg-(black opacity-80)">
					<slot/>
				</div>
			</div>
		</div>
	</div>
</template>