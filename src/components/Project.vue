<script setup lang="ts">
defineProps<{
  link: string;
  imageUrl: string;
}>();
</script>

<template>
  <n-button text tag="a" :href="link">
    <n-image :img-props="{ class: 'w-full' }" :src="imageUrl"
             class="transform hover:scale-105 transition-transform duration-200 ease-linear" preview-disabled/>
  </n-button>
</template>