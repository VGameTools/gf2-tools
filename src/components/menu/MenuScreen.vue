<template>
  <div class="w-full h-full bg-[#1b1b1f] fixed top-16 z-98">
    <div class="px-6 py-8">
      <div class="my-6" v-for="item in navList" :key="item.title">
        <p class="text-lg text-white" @click="go(item.path)">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { store } from '../../store/store';

const router = useRouter();

const navList = [
  {
    title: "晋升需求",
    path: "/level"
  },
  {
    title: "主题头像",
    path: "/avatar"
  }
]

const go = (path) => {
  router.push(path);
  store.isOpen = false;
}
</script>