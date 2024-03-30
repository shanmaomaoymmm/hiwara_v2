<template>
  <div class="topbar">
    <div class="avatar">
      <v-btn icon="$vuetify" size="36" style="margin-right: 0.8rem;" @click="leftDrawer = !leftDrawer">
        <v-avatar size="36" :image="avatarUrl"></v-avatar>
      </v-btn>
    </div>
    <div class="search">
      <div>搜索</div>
    </div>
    <div class="title">Hiwara</div>
  </div>
  <div class="main">
    <subscribe></subscribe>
  </div>
  <div class="bottom">
    <v-btn :variant="tabs === 0 ? 'flat' : 'text'" rounded="0" color="#00897B"
      style="height: 100%;width: calc(100% / 4);" @click="tabs = 0">
      <div class="tabs-item-text" :style="{ color: tabs === 0 ? 'inherit' : null }">
        <IconPark v-if="tabs === 0" type="rss" theme="outline" size="24" fill="#fff" strokeLinejoin="bevel" />
        <IconPark v-else type="rss" theme="filled" size="24" fill="#00897B" strokeLinejoin="bevel" />
        <br>订阅
      </div>
    </v-btn>
    <v-btn :variant="tabs === 1 ? 'flat' : 'text'" rounded="0" color="#00897B"
      style="height: 100%;width: calc(100% / 4);" @click="tabs = 1">
      <div class="tabs-item-text" :style="{ color: tabs === 1 ? 'inherit' : null }">
        <IconPark v-if="tabs === 1" type="video" theme="outline" size="24" fill="#fff" strokeLinejoin="bevel" />
        <IconPark v-else type="video" theme="filled" size="24" fill="#00897B" strokeLinejoin="bevel" />
        <br>视频
      </div>
    </v-btn>
    <v-btn :variant="tabs === 2 ? 'flat' : 'text'" rounded="0" color="#00897B"
      style="height: 100%;width: calc(100% / 4);" @click="tabs = 2">
      <div class="tabs-item-text" :style="{ color: tabs === 2 ? 'inherit' : null }">
        <IconPark v-if="tabs === 2" type="pic" theme="outline" size="24" fill="#fff" strokeLinejoin="bevel" />
        <IconPark v-else type="pic" theme="filled" size="24" fill="#00897B" strokeLinejoin="bevel" />
        <br>图片
      </div>
    </v-btn>
    <v-btn :variant="tabs === 3 ? 'flat' : 'text'" rounded="0" color="#00897B"
      style="height: 100%;width: calc(100% / 4);" @click="tabs = 3">
      <div class="tabs-item-text" :style="{ color: tabs === 3 ? 'inherit' : null }">
        <IconPark v-if="tabs === 3" type="comments" theme="outline" size="24" fill="#fff" strokeLinejoin="bevel" />
        <IconPark v-else type="comments" theme="filled" size="24" fill="#00897B" strokeLinejoin="bevel" />
        <br>论坛
      </div>
    </v-btn>
  </div>
</template>

<script setup>
import subscribe from './components/subscribe.vue'
import { IconPark } from '@icon-park/vue-next/es/all'
import { ref } from 'vue'
const avatarUrl = ref('https://www.qisato.com/api/file/avatar/1/1703143780888_487f7b22f68312d2c1bbc93b1aea445b_39371540.png')
const tabs = ref(0)
const leftDrawer = ref(false)
</script>

<style lang="scss" scoped>
.topbar {
  background-color: #00897B;
  height: 4rem;
  line-height: 4rem;
  display: flex;
  box-shadow:0 0 1rem #00000030;

  .avatar {
    padding-left: 0.8rem;
  }

  .search {
    flex: 1;
  }

  .search>div {
    background-color: #fff;
    display: inline-block;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 2rem;
    color: #666;
    padding: 0 1rem;
    font-size: 0.9rem;
  }

  .title {
    font-size: 1rem;
    display: inline-block;
    color: #fff;
    margin: 0 0.8rem;
    font-family: riwenlogo;
  }
}

.main {
  height: calc(100vh - 8rem);
}

.bottom {
  height: 4rem;
  box-shadow:0 0 1rem #00000030;

  .tabs-item-text {
    display: inline-block;
    font-size: 0.8rem;
    color: #000;

    @media (prefers-color-scheme: dark) {
      color: #ccc;
    }
  }
}

@font-face {
  font-family: riwenlogo;
  src: url('../static/font/riwenlogo.ttf');
}
</style>