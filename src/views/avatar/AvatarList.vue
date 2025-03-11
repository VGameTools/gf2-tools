<template>
  <DefaultLayout>
    <div class="bg-[#f5f5f5] px-4 py-4">
      <div class=" flex flex-wrap justify-between rounded-md">
        <div class="size-28 mb-1 border border-xs border-[#eee] rounded-md overflow-hidden"
          v-for="(item, index) in love" :key="index">
          <img :src="item.url" @click="open(item.name)">
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
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