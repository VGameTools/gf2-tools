<template>
  <div class="layout">
    <header-area></header-area>
    <slot></slot>
  </div>
</template>

<script setup>
import HeaderArea from '../components/header/HeaderArea.vue';
</script>