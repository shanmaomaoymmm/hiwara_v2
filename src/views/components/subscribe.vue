<template>
  <div class="subscribe">
    <v-tabs v-model="tabs" style="height: 3rem;box-shadow:0 0 1rem #00000030;" align-tabs="center" color="#00897B" grow>
      <v-tab style="height: 3rem;" :value="0">视频</v-tab>
      <v-tab style="height: 3rem;" :value="1">图片</v-tab>
    </v-tabs>
    <div class="main">
      <v-window v-model="tabs" style="min-height: 100%;">
        <v-window-item style="min-height: 100%;">
          <RouterLink to="/player">Video</RouterLink>
        </v-window-item>
        <v-window-item style="min-height: 100%;">
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
const tabs = ref(0)
</script>
<style lang="scss" scoped>
.subscribe {
  height: 100%;
  overflow: auto;
}

.main {
  height: calc(100% - 3rem);
  overflow: auto;
}
</style>