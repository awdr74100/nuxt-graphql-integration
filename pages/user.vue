<template>
  <h2>From pinia action(gql)</h2>
  <pre v-if="store.user">{{ store.user }}</pre>
</template>

<script setup lang="ts">
const store = useUserStore();

await store.getUser(4);
</script>
