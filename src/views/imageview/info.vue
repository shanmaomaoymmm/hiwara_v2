<template>
  <StackLayout style="padding: 20px 20px 0 20px;" :class="{ dark: darkMode }">
    <GridLayout columns="50px,*,100px" rows="50px">
      <StackLayout @tap="toUserZone" col="0" row="0">
        <Img src="https://www.iwara.tv/images/default-avatar.jpg" failureImageUri="~/assets/img/not-img.jpg"
          placeholderImageUri="~/assets/img/placeholder.png" stretch="aspectFill" class="avatar" fadeDuration="300" />
      </StackLayout>
      <Label @tap="toUserZone" col="1" row="0" :text="up" class="up" />
      <StackLayout col="2" row="0">
        <Button :text="following ? '已关注' : '关注'" @tap="followersButtonTap" />
      </StackLayout>
    </GridLayout>
    <GridLayout columns="*" rows="auto">
      <StackLayout col="0" row="1">
        <Label ref="titleRef" :text="title" class="title" :textWrap="allView" @tap="toggleExpand" />
        <StackLayout orientation="horizontal" class="tips" @tap="toggleExpand">
          <Label text="&#xf144; " class="text font-awesome-regular" />
          <Label :text="formatNumber(numViews)" />
          <Label text="   &#x1f9e1; " class="text font-awesome-regular" />
          <Label :text="formatNumber(numLikes)" />
          <Label text="   &#x1f553; " class="font-awesome-regular" />
          <Label :text="formatIsoToChineseDate(createdAt)" />
        </StackLayout>
        <Label ref="bodyRef" height="0" :text="body" class="body" textWrap="true" @tap="toggleExpand" />
      </StackLayout>
      <StackLayout col="0" row="1">
        <Label :text="allView ? '&#xf077;' : '&#xf078;'" class="font-awesome-solid drop" textAlignment="right" />
      </StackLayout>
    </GridLayout>
    <ScrollView style="opacity: 0;height: 0px;">
      <StackLayout>
        <Label ref="titleFoldShadow" @layoutChanged="getTitleFoldHeight" :text="title" class="title" />
        <Label ref="titleUnfoldShadow" @layoutChanged="getTitleUnfoldHeight" :text="title" class="title"
          textWrap="true" />
        <Label ref="bodyShadow" @layoutChanged="getBodyHeight" :text="body" class="body" textWrap="true" />
      </StackLayout>
    </ScrollView>
    <GridLayout columns="*,*,*,*" rows="auto">
      <StackLayout col="0" row="0" class="button" @tap="likeButtonTap">
        <Img :src="liked ? '~/assets/icon/like-active.png' : '~/assets/icon/like.png'" />
        <Label :text="liked ? '已喜欢' : '喜欢'" textAlignment="center" />
      </StackLayout>
      <StackLayout col="1" row="0" class="button" @tap="share">
        <Img src="~/assets/icon/share.png" />
        <Label text="分享" textAlignment="center" />
      </StackLayout>
      <StackLayout col="2" row="0" class="button" @tap="downloadFile">
        <Img src="~/assets/icon/download.png" />
        <Label text="下载" textAlignment="center" />
      </StackLayout>
      <StackLayout col="3" row="0" class="button" @tap="$emit('navigateToComments')">
        <Img src="~/assets/icon/comments.png" />
        <Label text="评论" textAlignment="center" />
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, onMounted, ref } from 'nativescript-vue'
import { Animation, AnimationDefinition } from '@nativescript/core'
import { likeImage, unLikeImage, followers, disFollowers } from '../../core/api'
import { toasty } from '../../core/viewFunction'
import * as SocialShare from "@nativescript/social-share"
import { navigateTo } from "../../core/navigate"
const props = defineProps<{
  title: string
  slug: string | null
  id: string
  up: string
  uid: string
  username: string
  body: string | null
  numViews: number
  numLikes: number
  createdAt: string
  ecchi: boolean
  liked: boolean
  following: boolean
  friend: boolean
  thumbnail: string
  avatar: string
  darkMode: boolean
}>();
const emit = defineEmits(['navigateToComments', 'changeLiked', 'changeFollowing']);
const allView = ref(false)
const titleRef = ref()
const bodyRef = ref()
const titleFoldShadow = ref()
const titleUnfoldShadow = ref()
const bodyShadow = ref()
const titleFoldHeight = ref(0)
const titleUnfoldHeight = ref(0)
const bodyHeight = ref(0)
let likeing = false
let followering = false
function likeButtonTap() {
  if (!likeing) {
    likeing = true
    if (props.liked) {
      // 已赞
      emit('changeLiked', false)
      unLikeImage(props.id).catch((err) => {
        emit('changeLiked', true)
        toasty('操作失败了喵~', 'Error')
      }).finally(() => {
        likeing = false
      })
    } else {
      // 未赞
      emit('changeLiked', true)
      likeImage(props.id).catch((err) => {
        emit('changeLiked', false)
        toasty('操作失败了喵~', 'Error')
      }).finally(() => {
        likeing = false
      })
    }
  }
}
function followersButtonTap() {
  // console.log(followering)
  if (!followering) {
    followering = true
    if (props.following) {
      // 已关注
      emit('changeFollowing', false)
      disFollowers(props.uid).catch((err) => {
        emit('changeFollowing', true)
        toasty('操作失败了喵~', 'Error')
      }).finally(() => {
        followering = false
      })
    } else {
      // 未关注
      emit('changeFollowing', true)
      followers(props.uid).catch((err) => {
        emit('changeFollowing', false)
        toasty('操作失败了喵~', 'Error')
      }).finally(() => {
        followering = false
      })
    }
  }
}
function share() {
  const title = props.title + ' - ' + props.up
  const url = 'https://www.iwara.tv/image/' + props.id + '/' + props.slug
  const separate = '\n------------------------------------\n'
  SocialShare.shareText('【Iwara.tv】' + separate + title + separate + url)
}
function downloadFile() {
  toasty('功能未开放', 'Error')
}
function formatNumber(num: number): string {
  if (num < 10000) {
    return num.toString();
  } else if (num < 100000000) {
    let wan = num / 10000;
    return wan.toFixed(1).replace(/\.0$/, '') + '万';
  } else {
    let yi = num / 100000000;
    return yi.toFixed(1).replace(/\.0$/, '') + '亿';
  }
}
function formatIsoToChineseDate(isoDate: string): string {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() 返回的月份是从0开始的
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // 将数字转换为两位字符串，例如 9 变为 '09'
  const pad = (num: number) => num.toString().padStart(2, '0');
  // 拼接成 '2024年9月11日 8:47' 格式的字符串
  return `${year}年${pad(month)}月${pad(day)}日 ${pad(hours)}:${pad(minutes)}`;
}
function toggleExpand() {
  if (allView.value) {
    const animationDefinition: AnimationDefinition[] = [
      {
        target: titleRef.value.nativeView, // 动画的目标视图
        duration: 200, // 动画持续时间，单位为毫秒
        height: titleFoldHeight.value + 'px', // 动画的目标高度
      },
      {
        target: bodyRef.value.nativeView, // 动画的目标视图
        duration: 200, // 动画持续时间，单位为毫秒
        height: 0, // 动画的目标高度
      }
    ]
    new Animation(animationDefinition).play().then(() => {
      allView.value = !allView.value
    })
  } else {
    allView.value = !allView.value
    const animationDefinition: AnimationDefinition[] = [
      {
        target: titleRef.value.nativeView, // 动画的目标视图
        duration: 200, // 动画持续时间，单位为毫秒
        height: titleUnfoldHeight.value + 'px', // 动画的目标高度
      },
      {
        target: bodyRef.value.nativeView, // 动画的目标视图
        duration: 200, // 动画持续时间，单位为毫秒
        height: props.body ? bodyHeight.value + 'px' : 0, // 动画的目标高度
      }
    ]
    new Animation(animationDefinition).play().then
  }
}
function getTitleFoldHeight() {
  titleFoldHeight.value = titleFoldShadow.value.nativeView.getMeasuredHeight()
}
function getTitleUnfoldHeight() {
  titleUnfoldHeight.value = titleUnfoldShadow.value.nativeView.getMeasuredHeight()
}
function getBodyHeight() {
  bodyHeight.value = bodyShadow.value.nativeView.getMeasuredHeight()
}
function toUserZone() {
  navigateTo('/zone', {
    uid: props.uid,
    username: props.username
  })
}
</script>
<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
}

.up {
  color: #262626;
}

.title {
  color: #262626;
  font-size: 16px;
  margin: 20px;
}

.tips {
  margin: 0px 20px 20px 20px;
  font-size: 12px;
}

.body {
  margin: 0 20px;
}


.drop {
  color: #262626;
  padding: 10px 20px;
  font-size: 12px;
}

.button {
  margin: 30px;

  Img {
    height: 64px;
    width: 64px;
  }

  Label {
    font-size: 12px;
    margin: 10px 0;
  }
}

Button {
  background-color: #00796B;
  color: #f0f0f0;
  margin: 14px 24px;
}

.dark {

  .up,
  .title {
    color: #f2f2f2;
  }
}
</style>