<template>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'
const theme = useTheme()
toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
})
function toggleTheme(isdark) {
  theme.global.name.value = isdark ? 'dark' : 'light'
}

</script>

<style scoped></style>
