<template>
  <div class="header-container">
    <div class="return" @click="go('/')">
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31 36L19 24L31 12" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <h2>{{ pageTitle }}</h2>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import "./index.css";

const route = useRoute();
const router = useRouter();
const pageTitle = ref("");

pageTitle.value = route.meta.title;
const go = (path) => {
  router.push(path);
}
</script>
