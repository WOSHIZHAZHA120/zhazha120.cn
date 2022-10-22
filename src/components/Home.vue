<script lang="ts" setup>
import avatar from "../resources/images/avatar.png";
import Project_GDPW from "../resources/images/Projects/GDPW.png";
import Project_GDCN from "../resources/images/Projects/GDCN.png";
import Project_TOD from "../resources/images/Projects/TOD.png";
import {ref} from "vue";
import {NH2, NH4} from "naive-ui";
import GithubProject from "./GithubProject.vue";
import Project from "./Project.vue";

const isMobile = ref(screen.width < 768);
window.addEventListener('resize', () => isMobile.value = screen.width < 768);

const showAboutMore = ref(true);
const codeTimeImageUrl = 'https://img.shields.io/endpoint?url=' + encodeURIComponent('https://codetime-api.datreks.com/badge/2270') + '&style=for-the-badge';
</script>

<template>
  <n-card class="mx-auto text-center lg:w-2/3">
    <template #header>
      <n-space justify="space-between">
        <n-space>
          <n-image :src="avatar" class="rounded-full" width="50"/>
          <n-h1>渣渣120</n-h1>
        </n-space>

        <n-image :src="codeTimeImageUrl" preview-disabled/>
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
        <n-button href="https://github.com/26F-Studio" tag="a" text>
          <n-text class="text-2xl" type="primary">26F Studio</n-text>
        </n-button>

        <span> & </span>
        <n-button href="https://github.com/Geometry-Dash-Chinese" tag="a" text>
          <n-text class="text-2xl" type="primary">GDCN Team</n-text>
        </n-button>
      </span>

      <br>

      <n-h4>一个不合格的全栈开发者</n-h4>
    </component>

    <n-divider>作品</n-divider>
    <n-grid :x-gap="10" :y-gap="10" cols="1 768:3">
      <n-grid-item>
        <Project :image-url="Project_GDPW" link="https://geometrydashchinese.com"/>
      </n-grid-item>

      <n-grid-item>
        <Project :image-url="Project_GDCN" link="https://gf.geometrydashchinese.com"/>
      </n-grid-item>

      <n-grid-item>
        <Project :image-url="Project_TOD" link="https://26f-studio.github.io/techmino-online-dict"/>
      </n-grid-item>
    </n-grid>

    <n-divider>技术栈</n-divider>

    <n-space :justify="(isMobile ? 'center' : 'space-evenly')">
      <n-a href="https://php.net">
        <n-image preview-disabled src="https://shields.io/badge/php-121212?logo=php&style=for-the-badge"/>
      </n-a>

      <n-a href="https://laravel.com">
        <n-image preview-disabled src="https://shields.io/badge/laravel-121212?logo=laravel&style=for-the-badge"/>
      </n-a>

      <n-a href="https://typescriptlang.org">
        <n-image preview-disabled src="https://shields.io/badge/typescript-121212?logo=typescript&style=for-the-badge"/>
      </n-a>

      <n-a href="https://vuejs.org">
        <n-image preview-disabled src="https://shields.io/badge/vue-121212?logo=vue.js&style=for-the-badge"/>
      </n-a>

      <n-a href="https://vitejs.dev">
        <n-image preview-disabled src="https://shields.io/badge/vite-121212?logo=vite&style=for-the-badge"/>
      </n-a>

      <n-a href="https://docker.com">
        <n-image preview-disabled src="https://shields.io/badge/docker-121212?logo=docker&style=for-the-badge"/>
      </n-a>

      <n-a href="https://podman.io">
        <n-image preview-disabled src="https://shields.io/badge/podman-121212?logo=podman&style=for-the-badge"/>
      </n-a>
    </n-space>

    <n-divider>联系我</n-divider>

    <n-space :justify="(isMobile ? 'center' : 'space-evenly')">
      <n-a href="https://wpa.qq.com/msgrd?uin=2331281251">
        <n-image preview-disabled
                 src="https://shields.io/badge/qq-2331281251-121212?logo=Tencent QQ&style=for-the-badge"/>
      </n-a>

      <n-a href="https://github.com/WOSHIZHAZHA120">
        <n-image preview-disabled
                 src="https://shields.io/badge/github-WOSHIZHAZHA120-121212?logo=github&style=for-the-badge"/>
      </n-a>

      <n-a href="https://learnku.com/users/68169">
        <n-image preview-disabled
                 src="https://shields.io/badge/learnku-渣渣120-121212?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAARiSURBVEjHpdZpbFRVHAXw39CFaWlZ2mILUlCUTXAXBI1KcSkYFSIuIVFAUdxQxLjFNUGriURMxGiQ4AdFiQtGg1ECiFtVNCqbQAEpRAuC0hBawba0M36Y1+nMdLAoZ768ufd/Tv7Lefe+EOjkNDcYrUBIxD5fWGydiCMjZJhJyhTLDhiLrBEhhB5mGK/KSlX+km+wiw3xoXn2H0GumztdbauVqhyUa6BLDPWRF9WGlJqjmwqrNccJmUZ6RL377NFLPz2F0WyfHXYrMFdPFb5OYGQY4VENHghZZp9Z/gwKydQsCnp6Xj97naDFfg3I0VWWXbr5w732BIwMLQGj0Bx9Q5a7yS7ku0K5Inut8LE6FHvHYY/YqU4zMuTp4ynFJqpBnnHGKVRrlaUOoNh8zgG9LdYoKiqq0btKwViV+iR1r8RXJgaMtzQEjCbvBYxTYmMJey3Yav29Lgc5lropSfB6n+qGbAtSGG/KbQsrU5eyXe8S8Lj5SYJzzQHn25/COGhczIEwXH6KMfKMADv0lhVf7aTULwGjewojN9a8mGCXNF7LAU2ygphYdLZDgRPbo0ub4O9ptneBAvUJbmtRrxD8GlglEbvbBD+3I2XzN5VgmK1a4qtRWwwFX9mewqjxeWJpt6tPaPBf7g6s8Y1Lk2gXWq0fmJ40yINmCSGb24SQZbK1GkQ0+Nk02eBBS+WldHaJx0CmKTb4W0STjW4NGJPYpjwILlHuBmP1Dv6PsTYlv1iOa10ePPdymcmujJv/Apt4yA/KhVJoIeV+dE+79Vh71puQMPtWxhjfeYpMt1rjGYPifssyxLPWuUOmdMgwzVrPGRJnZBpgtjVmyA4hZLiHnWWNbep1dbJSW7xkdRprtOJsMwy1W7V6efo70yZP+1a0taRRFliku84O2+4bWzT5d2QZZKRBch1UY6pnvZu4fa6v9fR/EbbMda3Vd4SuhjvdcahTbbWdaWKibc3pSLC7V4wPzE+LbW7zZVrBoHmdOhAMGxCXI0NfJWnj4oIdZbjHFNc4wzBFfrLFJ5YfvWCqSc51jldttBF3mWCiOlDmZAuTbu2EHrYvOdfo4LjtqkShMjloFNGIswyWpzjgjXBiaobtBfNVGAZWeFyJ+xShQL4sXO8qS1VoRtgTwbmOVMFQPOlaNS4Ep7lftalqdHaegQaiwjxlbtEJA5TY1HGGzd52rVMRViSiVtREpb43U546f8tXgBwzrbP5SNMcpVJR8Jxtrkplwauf72brTdLflxY4Qezt7+tllQZqHe0Hbkyecihhyk2eNNMLdqoWNliO2d4XMd1sS2ywT5Ghdphua/vMEgXbUO8ZS1ykvwMW+ix2/agy1UijFPrFG74N7r8j+DBDNMlZEZvT9OeQVValaVgaH2aK/OsHZkeIpE45W0vCdflfEdWcKpirKeFC/+/5NbZ+S7QK9nDI4WMo+Q99kwWPV3sMJVOtn4xEwZPSnsRHjyolerQJhoX9fEyC2+2NdfEf6OBoa8fp75QAAAAASUVORK5CYII=&style=for-the-badge"/>
      </n-a>

      <n-a href="https://space.bilibili.com/24267334">
        <n-image preview-disabled src="https://shields.io/badge/b站-渣渣120-121212?logo=bilibili&style=for-the-badge"/>
      </n-a>

      <n-a href="mailto://WOSHIZHAZHA120@qq.com">
        <n-image preview-disabled
                 src="https://shields.io/badge/邮箱-WOSHIZHAZHA120@qq.com-121212?logo=Mail.Ru&style=for-the-badge"/>
      </n-a>
    </n-space>

    <n-divider>项目</n-divider>

    <n-grid :x-gap="10" :y-gap="10" cols="1 768:3">
      <n-grid-item>
        <GithubProject repo="Geometry-Dash-Chinese" user="Geometry-Dash-Chinese"/>
      </n-grid-item>

      <n-grid-item>
        <GithubProject repo="Techmino" user="26F-Studio"/>
      </n-grid-item>

      <n-grid-item>
        <GithubProject repo="Quatrack" user="26F-Studio"/>
      </n-grid-item>
    </n-grid>

    <n-divider>关于此网站</n-divider>

    <n-space justify="center">
      <n-space>
        <n-text>开源:&nbsp;</n-text>
        <n-button href="https://github.com/WOSHIZHAZHA120/zhazha120.cn" tag="a" text type="primary">Github</n-button>
      </n-space>

      <n-divider vertical/>

      <n-space>
        <n-text>技术栈:&nbsp;</n-text>
        <n-button href="https://vitejs.dev" tag="a" text type="primary">Vite</n-button>
        <n-button href="https://typescriptlang.org" tag="a" text type="primary">Typescript</n-button>
        <n-button href="https:/vuejs.org" tag="a" text type="primary">Vue</n-button>
      </n-space>

      <n-divider vertical/>

      <n-space>
        <n-text>UI库:&nbsp;</n-text>
        <n-button href="https://naiveui.com" tag="a" text type="primary">Naive UI</n-button>
      </n-space>
    </n-space>
  </n-card>
</template>
