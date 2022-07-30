<script lang="ts" setup>
import avatar from "../resources/images/avatar.png";
import Project_GDPW from "../resources/images/Projects/GDPW.png";
import Project_GDCN from "../resources/images/Projects/GDCN.png";
import Project_TOD from "../resources/images/Projects/TOD.png";
import {ref} from "vue";
import {NH2, NH4} from "naive-ui";

const isMobile = ref();
const reloadSize = () => isMobile.value = screen.width < 768;
window.addEventListener('resize', reloadSize);
reloadSize();

const code_time_url = 'https://img.shields.io/endpoint?url=' + encodeURIComponent('https://codetime-api.datreks.com/badge/2270') + '&style=for-the-badge'
</script>

<template>
  <n-card class="mx-auto text-center lg:w-2/3">
    <template #header>
      <n-space justify="space-between">
        <n-space>
          <n-image :src="avatar" class="rounded-3xl" width="50"/>
          <n-h1>渣渣120</n-h1>
        </n-space>

        <n-image :src="code_time_url"/>
      </n-space>

      <n-divider/>
    </template>

    <component :is="isMobile ? NH4 : NH2">
      <span>你好, 我是 </span>
      <n-text type="info">渣渣120</n-text>

      <br v-if="isMobile">
      <span v-else>, </span>

      <span>你也可以叫我的英文名 </span>
      <n-text type="info">WOSHIZHAZHA120</n-text>

      <br>

      <span>
        <span>目前在 </span>
        <n-a href="https://github.com/26F-Studio">26F Studio</n-a>
        <span> & </span>
        <n-a href="https://github.com/Geometry-Dash-Chinese">GDCN Team</n-a>
      </span>

      <br>

      <n-h4>
        <span>是 GDCN 服主, 全栈开发者, </span>
        <n-text title="你知道的太多了" delete depth="3">以及深度福瑞控</n-text>
      </n-h4>
    </component>

    <n-divider>作品</n-divider>
    <n-grid :x-gap="10" :y-gap="10" cols="1 768:3">
      <n-grid-item>
        <n-a href="https://geometrydashchinese.com">
          <n-image :img-props="{ class: 'w-full' }" :src="Project_GDPW"
                   class="transform hover:scale-105 transition-transform duration-200 ease-linear" preview-disabled/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://gf.geometrydashchinese.com">
          <n-image :img-props="{ class: 'w-full' }" :src="Project_GDCN"
                   class="transform hover:scale-105 transition-transform duration-200 ease-linear" preview-disabled/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://26f-studio.github.io/techmino-online-dict">
          <n-image :img-props="{ class: 'w-full' }" :src="Project_TOD"
                   class="transform hover:scale-105 transition-transform duration-200 ease-linear" preview-disabled/>
        </n-a>
      </n-grid-item>
    </n-grid>

    <n-divider>技术栈</n-divider>
    <n-space :justify="(isMobile ? 'center' : 'space-evenly')">
      <n-a href="https://php.net">
        <n-image src="https://shields.io/badge/php-121212?logo=php&style=for-the-badge"/>
      </n-a>

      <n-a href="https://laravel.com">
        <n-image src="https://shields.io/badge/laravel-121212?logo=laravel&style=for-the-badge"/>
      </n-a>

      <n-a href="https://typescriptlang.org">
        <n-image src="https://shields.io/badge/typescript-121212?logo=typescript&style=for-the-badge"/>
      </n-a>

      <n-a href="https://vuejs.org">
        <n-image src="https://shields.io/badge/vue-121212?logo=vue.js&style=for-the-badge"/>
      </n-a>

      <n-a href="https://vitejs.dev">
        <n-image src="https://shields.io/badge/vite-121212?logo=vite&style=for-the-badge"/>
      </n-a>

      <n-a href="https://docker.com">
        <n-image src="https://shields.io/badge/docker-121212?logo=docker&style=for-the-badge"/>
      </n-a>

      <n-a href="https://podman.io">
        <n-image src="https://shields.io/badge/podman-121212?logo=podman&style=for-the-badge"/>
      </n-a>
    </n-space>

    <n-divider>联系我</n-divider>
    <n-space :justify="(isMobile ? 'center' : 'space-evenly')">
      <n-a href="https://wpa.qq.com/msgrd?uin=2331281251">
        <n-image src="https://shields.io/badge/qq-渣渣120-121212?logo=Tencent QQ&style=for-the-badge"/>
      </n-a>

      <n-a href="https://space.bilibili.com/24267334">
        <n-image src="https://shields.io/badge/b站-渣渣120-121212?logo=bilibili&style=for-the-badge"/>
      </n-a>

      <n-a href="mailto://WOSHIZHAZHA120@qq.com">
        <n-image src="https://shields.io/badge/邮箱-WOSHIZHAZHA120@qq.com-121212?logo=Mail.Ru&style=for-the-badge"/>
      </n-a>
    </n-space>

    <n-divider>项目</n-divider>
    <n-grid :x-gap="10" :y-gap="10" cols="1 768:3">
      <n-grid-item>
        <n-a href="https://github.com/Geometry-Dash-Chinese/Geometry-Dash-Chinese">
          <n-image :img-props="{ class: 'w-full' }"
                   src="https://github-readme-stats.vercel.app/api/pin?username=Geometry-Dash-Chinese&repo=Geometry-Dash-Chinese&theme=dark"/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://github.com/Geometry-Dash-Chinese/Geometry-Dash-Algorithm">
          <n-image :img-props="{ class: 'w-full' }"
              src="https://github-readme-stats.vercel.app/api/pin?username=Geometry-Dash-Chinese&repo=Geometry-Dash-Algorithm&theme=dark"/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://github.com/Geometry-Dash-Chinese/Geometry-Dash-Object">
          <n-image :img-props="{ class: 'w-full' }"
                   src="https://github-readme-stats.vercel.app/api/pin?username=Geometry-Dash-Chinese&repo=Geometry-Dash-Object&theme=dark"/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://github.com/26F-Studio/Techmino">
          <n-image :img-props="{ class: 'w-full' }"
                   src="https://github-readme-stats.vercel.app/api/pin?username=26F-Studio&repo=Techmino&theme=dark"/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://github.com/26F-Studio/Techmino_Galaxy">
          <n-image :img-props="{ class: 'w-full' }"
                   src="https://github-readme-stats.vercel.app/api/pin?username=26F-Studio&repo=Techmino_Galaxy&theme=dark"/>
        </n-a>
      </n-grid-item>

      <n-grid-item>
        <n-a href="https://github.com/26F-Studio/Techluster">
          <n-image :img-props="{ class: 'w-full' }"
                   src="https://github-readme-stats.vercel.app/api/pin?username=26F-Studio&repo=Techluster&theme=dark"/>
        </n-a>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
