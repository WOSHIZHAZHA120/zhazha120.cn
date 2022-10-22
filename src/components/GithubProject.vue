<script setup lang="ts">
withDefaults(
    defineProps<{
      user: string;
      repo: string;
      theme?: string;
    }>(),
    {
      theme: 'dark'
    }
);
</script>

<template>
  <n-button text tag="a" :href="(`https://github.com/${user}/${repo}`)">
    <n-image preview-disabled :img-props="{ class: 'w-full' }"
             :src="(`https://github-readme-stats.vercel.app/api/pin?username=${user}&repo=${repo}&theme=${theme}`)"/>
  </n-button>
</template>