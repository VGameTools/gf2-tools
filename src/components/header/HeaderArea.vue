<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { store } from '../../store/store';

const route = useRoute();
const pageTitle = ref("");

pageTitle.value = route.meta.title;

const openMenu = () => {
  store.isOpen = !store.isOpen;
  if (store.isOpen) {
    pageTitle.value = "菜单";
  } else {
    pageTitle.value = route.meta.title;
  }
}
</script>

<template>
  <div class="w-full h-16 bg-[#202026] fixed top-0 z-99">
    <!-- Menu icon -->
    <div class="h-16 flex items-center left-4 absolute cursor-pointer" @click="openMenu">
      <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="!store.isOpen">
        <path d="M7.94971 11.9497H39.9497" stroke="#fff" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M7.94971 23.9497H39.9497" stroke="#fff" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M7.94971 35.9497H39.9497" stroke="#fff" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
        <path d="M8 8L40 40" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 40L40 8" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <p class="text-white text-xl text-center leading-16">{{ pageTitle }}</p>
  </div>
</template>
