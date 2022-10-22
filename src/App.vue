<script lang="ts" setup>
import {darkTheme, NImage, useOsTheme} from "naive-ui";
import {computed, h} from "vue";
import {router} from "./core/client";
import avatar from "./resources/images/avatar.png";

const systemTheme = useOsTheme();
const theme = computed(() => {
  return systemTheme.value === 'light' ? null : darkTheme;
});

const options = [
  {
    label: '渣渣120',
    key: 'avatar',
    icon: () => h(NImage, {
      src: avatar,
      class: 'rounded-xl',
      imgProps: {
        class: 'w-full'
      }
    })
  }
];
</script>

<template>
  <n-config-provider :theme="theme" class="h-full">
    <n-message-provider>
      <n-dialog-provider>
        <n-loading-bar-provider>
          <n-notification-provider>
            <n-layout class="h-full">
              <n-layout-content class="p-5 pb-32 lg:pb-20">
                <router-view/>
              </n-layout-content>

              <n-layout-footer class="mx-auto text-center p-5" position="absolute">
                <span>&copy 2022 - {{ new Date().getFullYear() }}</span>
                <n-divider vertical/>
                <n-button text @click="router.push('/')">渣渣120</n-button>
                <n-divider vertical/>
                <n-button href="https://beian.miit.gov.cn" tag="a" text>赣ICP备2022005275号</n-button>
              </n-layout-footer>
            </n-layout>
          </n-notification-provider>
        </n-loading-bar-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

