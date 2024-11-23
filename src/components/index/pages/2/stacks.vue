<script lang="ts" setup>
import { groupBy, pipe, prop } from 'remeda'
import stacks from '~/core/shared/stacks'

const groupedStacks = pipe(
	stacks,
	groupBy(
		prop('type')
	)
)
</script>

<template>
	<div class="flex <sm:(flex-col) gap-5">
		<template v-for="(items, type) in groupedStacks">
			<div class="flex-1">
				<Panel :header="type">
					<div class="flex gap-2">
						<template v-for="item in items">
							<Button v-tooltip.top="item.name" :href='item.website' as="a" class="!p-0" link>
								<div :class="(`icon-btn ${item.icon}`)"/>
							</Button>
						</template>
					</div>
				</Panel>
			</div>
		</template>
	</div>
</template>