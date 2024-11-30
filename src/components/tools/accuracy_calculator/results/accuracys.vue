<script lang="ts" setup>
defineProps<{
	readonly results: number[]
	readonly passRequirePercentage: number
}>()
</script>

<template>
	<div class="flex justify-center items-center gap-2">
		<TransitionGroup appear mode="out-in" name="fade">
			<template v-for="(result, index) in results">
				<Message :severity="(result >= passRequirePercentage ? 'success' : 'error')" class="w-fit">{{ result }}%</Message>

				<Transition appear mode="out-in" name="fade">
					<template v-if="results.length !== index + 1">
						<span>→</span>
					</template>
				</Transition>
			</template>
		</TransitionGroup>
	</div>
</template>

<style lang="scss">
@import '~/styles/transitions/fade';
</style>