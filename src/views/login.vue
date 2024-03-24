<template>
  <div style="padding: 1.5rem;">
    <div class="title">
      登录到你的Iwara账号
    </div>
    <div>
      <v-text-field label="请输入账号" color="#00897B" variant="underlined"></v-text-field>
      <v-text-field label="请输入密码" color="#00897B" variant="underlined"></v-text-field>
    </div>
    <div style="margin: 1rem 0;">
      <v-btn color="#00897B" size="large" block>
        登录
      </v-btn>
    </div>
    <div style="text-align: right;">
      <a href="https://www.iwara.tv/register">注册账号</a>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>

.title {
  font-size: 1.5rem;
  margin: 16vh 0rem 1rem 0rem;
}
</style>