<template>
	<div class="relative">
		<slot name="trigger"/>

		<div class="size-full absolute top-0 left-0">
			<div class="size-full transition-opacity opacity-0 hover:opacity-100">
				<div class="size-full bg-black bg-opacity-80">
					<slot/>
				</div>
			</div>
		</div>
	</div>
</template>