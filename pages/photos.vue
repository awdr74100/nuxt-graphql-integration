<template>
  <h2>From useAsyncGql(gql)</h2>
  <pre v-if="data.photos">{{ data.photos }}</pre>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql("getPhotos");
// const result = await GqlGetPhotos();


</script>
