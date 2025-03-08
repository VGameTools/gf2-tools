<template>
  <DefaultLayout>
    <div class="avatar-container">
      <div class="avatarList">
        <div class="avatarItem" v-for="(item, index) in love" :key="index">
          <img :src="item.url" @click="open(item.name)">
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import "./index.css";
import data from "../../data/avatar.json";
import DefaultLayout from "../../layouts/DefaultLayout.vue";

const { love } = data.data;
const srcList = [];
love.forEach((item) => {
  srcList.push(item.url);
})

const open = (name) => {
  alert(name);
}
</script>