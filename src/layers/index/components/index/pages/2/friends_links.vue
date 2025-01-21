<script lang="ts" setup>
import friends_links from '~/shared/friends_links'
</script>

<template>
	<div class="w-full pb-2 overflow-scroll">
		<div class="w-max mx-auto flex justify-center gap-2">
			<template v-for="friends_link in friends_links">
				<Button :dt="{ 'padding.x': 0, 'padding.y': 0 }" :href="friends_link.href" as="a" class="transition-opacity hover:opacity-80" text>
					<Panel :dt="{ 'header.padding': 0, 'content-padding': '1rem' }" class="w-fit">
						<div class="flex items-center gap-2">
							<div class="h-12">
								<Image :src="friends_link.icon" image-class="size-full rounded-full"/>
							</div>

							<div class="flex flex-col">
								<span class="text-xl fw-extrabold">{{ friends_link.name }}</span>
								<span class="text-sm opacity-50">{{ friends_link.description }}</span>
							</div>
						</div>
					</Panel>
				</Button>
			</template>
		</div>
	</div>
</template>