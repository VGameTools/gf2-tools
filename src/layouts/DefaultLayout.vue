<template>
  <div class="h-full relative">
    <header-area></header-area>
    <menu-screen v-show="store.isOpen"></menu-screen>
    <main class="mt-16" v-show="!store.isOpen">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import HeaderArea from '../components/header/HeaderArea.vue';
import MenuScreen from '../components/menu/MenuScreen.vue';
import { store } from '../store/store';
</script>