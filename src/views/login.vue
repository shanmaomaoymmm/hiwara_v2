<template>
  <div style="padding: 1.5rem;">
    <div class="title">
      登录到你的Iwara账号
    </div>
    <div>
      <v-text-field label="请输入账号" color="#00897B" variant="underlined" clearable></v-text-field>
      <v-text-field label="请输入密码" color="#00897B" variant="underlined" clearable></v-text-field>
    </div>
    <div style="margin: 1rem 0;">
      <v-btn color="#00897B" size="large" block>
        登录
      </v-btn>
    </div>
    <div v-if="false" style="text-align: right;">
      <span @click="openExternalLink('https://www.baidu.com')">注册账号</span>
    </div>
    <div class="bottom">
      内容源自iwara.tv，本软件禁止用于商业用途<br />
      ©2019-2024 Maoerxiachuan
    </div>
  </div>
</template>
<script setup>
function openExternalLink(url) {

}

// 使用示例
openExternalLink('https://www.example.com');

</script>
<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  margin: 16vh 0rem 1rem 0rem;
}

.bottom {
  text-align: center;
  color: #808080;
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 1.5rem;
}
</style>