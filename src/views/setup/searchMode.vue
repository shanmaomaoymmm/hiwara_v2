<template>
  <Page :class="{ dark: darkMode }">
    <ActionBar>
      <GridLayout columns="32px,auto,*" class="topBar">
        <Label col="0" text="&#xf104;" class="font-awesome-solid" @tap="navigateBack" />
        <Label col="1" text="设置搜索模式" />
      </GridLayout>
    </ActionBar>
    <ScrollView>
      <StackLayout>
        <GridLayout columns="*,auto" rows="56px" class="button" @tap="toggle(0)">
          <Label col="0" text="关键词搜索" class="label" />
          <Label col="1" text="&#xf054;" class="font-awesome-solid arrow" />
        </GridLayout>
        <GridLayout columns="*,auto" rows="56px" class="button" @tap="toggle(1)">
          <Label col="0" text="标签搜索" class="label" />
          <Label col="1" text="&#xf054;" class="font-awesome-solid arrow" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script lang="ts" setup>
import { ref, watch, $navigateBack, defineProps } from "nativescript-vue"
import { changeSearchMode } from "../../core/database"
import { useMainStore } from '../../core/store'
const mainStore = useMainStore()
const darkMode = ref(mainStore.dark)
const props = defineProps<{
  back: () => void
}>()
watch(() => mainStore.dark, (val) => {
  darkMode.value = val
})
function navigateBack() {
  $navigateBack()
}
function toggle(val: number) {
  changeSearchMode(val).then(() => {
    props.back()
    $navigateBack()
  })
}
</script>
<style scoped lang="scss">
.topBar {
  color: #ffffff;
  font-size: 18px;
}

.tab {
  .tab-bar {
    background-color: #00796B;
    height: 8px;
    border-radius: 50%;
    width: 100px;
  }

  border-bottom-width: 1px;
  border-color: #c0c0c0;
}

.button {
  border-bottom-width: 1px;
  border-color: #c0c0c0;
  font-size: 16px;

  .label {
    padding: 0 40px;
    color: #424242;
  }

  .arrow {
    padding: 0 40px;
  }
}

.dark {
  background-color: #0d0d0d;
  color: #d0d0d0;

  .button {
    .label {
      color: #e0e0e0;
    }
  }
}
</style>