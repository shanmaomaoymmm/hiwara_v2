<template>
  <div class="video-player">
  </div>
  <div class="tabs">
    <v-tabs v-model="tabs" align-tabs="start" style="height: 2.5rem;" color="#00897B">
      <v-tab style="height: 2.5rem;" :value="0">简介</v-tab>
      <v-tab style="height: 2.5rem;" :value="1">评论</v-tab>
    </v-tabs>
  </div>
  <div class="content" ref="content" @scroll="handleScroll" >
    <div>
      <div v-for="i in 100">qwertyuiopasdfghjklzxcvbnm</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
const tabs = ref(0)
const content = ref(null)
var scrollEnd = false
function handleScroll(e) {
  let ch = content.value.clientHeight
  let sh = content.value.scrollHeight
  let st = content.value.scrollTop
  scrollEnd = sh - st < ch
}
</script>

<style lang="scss" scoped>
.video-player {
  background: #000;
  width: 100vw;
  aspect-ratio: 16 / 9;
}

.tabs {
  padding: 0 1rem;
  box-shadow: 0 0 1rem #00000030;
  background: #fff;
}

.content {
  overflow: auto;
  height: calc(100vh - 100vw * 9 / 16 - 2.5rem);

  >div {
    padding: 0.5rem 1rem;
    height: 100000000000px;
  }
}
</style>