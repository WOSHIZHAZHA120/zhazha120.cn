<script lang="ts" setup>
import avatar_main from 'assets/avatar_main.webp'
</script>

<template>
	<div class="flex flex-col">
		<div class="flex <sm:(flex-col) items-center sm:(gap-2)">
			<div class=":uno: transition-(duration-500) hover:rotate-360">
				<Image :src="avatar_main" alt="头像" image-class=":uno: size-30 rounded-full" preview/>
			</div>

			<span class="text-12 font-extrabold">渣渣120</span>
		</div>

		<div class="flex <sm:(justify-center) items-center gap-2">
			<Tag severity="success" value="前端"/>
			<Tag severity="success" value="后端"/>
			<Tag severity="success" value="运维"/>
			<Tag severity="success" value="福瑞"/>
		</div>
	</div>
</template>