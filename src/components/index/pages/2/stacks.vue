<script lang="ts" setup>
import { groupBy, pipe, prop } from 'remeda'
import stacks from '~/core/shared/data/stacks'
import isMobile from '~/core/shared/isMobile'

const groupedStacks = pipe(
	stacks,
	groupBy(
		prop('type')
	)
)
</script>

<template>
	<div class="flex flex-wrap gap-2">
		<template v-for="(items, type) in groupedStacks">
			<div :class="[isMobile ? 'w-full' : 'flex-1']">
				<Panel :header="type">
					<div class="flex gap-2">
						<template v-for="item in items">
							<Button v-tooltip.top="item.name" :dt="{ 'sm.font-size': '1.5rem', 'sm.padding.x': 0, 'sm.padding.y': 0 }" :fluid="isMobile" :href='item.website' as="a" size="small" variant="link">
								<div :class="item.icon"/>
							</Button>
						</template>
					</div>
				</Panel>
			</div>
		</template>
	</div>
</template>