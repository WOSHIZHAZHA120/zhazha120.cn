<script lang="ts" setup>
import {tryOnMounted} from '@vueuse/core'
import {groupBy, map, pipe} from 'remeda'

definePageMeta({
  name: '工具箱'
})

const pages = ref()

tryOnMounted(() => {
  pages.value = pipe(
      Object.keys(
          import.meta.glob(`@/pages/toolbox/*/**`)
      ),
      map(path => {
        const destination = path.toString()
            .replace(/^(\/pages)/, '')
            .replace(/\.vue$/, '')

        return {
          path: destination,
          link: useLink({
            to: destination
          })
        }
      }),
      groupBy(page => {
        return page.path.toString()
            .replace(/^(\/toolbox\/)/, '')
            .replace(/\.vue$/, '')
            .split('/')[0]
      })
  )
})

const translations: Record<string, string> = {
  '4k': '4 Key',
  image: '图片'
}
</script>

<template>
  <subpage>
    <template v-for="(buttons, name) in pages">
      <n-card :title="translations[name]">
        <template v-for="button in buttons">
          <n-button @click="button.link.navigate()">{{ button.link.route.name }}</n-button>
        </template>
      </n-card>
    </template>
  </subpage>
</template>