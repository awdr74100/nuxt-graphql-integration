<template>
  <h1>User interaction</h1>
  <button @click.prevent="show('user')">獲取用戶</button>
  <button @click.prevent="show('photo')">獲取照片</button>
  <pre v-if="userStore.user">{{ userStore.user }}</pre>
  <pre v-if="photoStore.photo">{{ photoStore.photo }}</pre>
</template>

<script setup lang="ts">
const userStore = useUserStore();

const photoStore = usePhotoStore();

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const show = async (target: "user" | "photo") => {
  if (target === "user") {
    await userStore.getUser(getRandom(1, 10));
  }

  if (target === "photo") {
    await photoStore.getPhoto(getRandom(1, 10));
  }
};
</script>
