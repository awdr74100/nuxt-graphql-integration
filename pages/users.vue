<!-- <template>
  <h1>Use useFetch()</h1>
  <pre v-if="data">{{ data }}</pre>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/users");
</script> -->

<!-- <template>
  <h1>Use useAsyncGql() (https://jsonplaceholder.ir/graphql)</h1>
  <pre v-if="data">{{ data }}</pre>
</template>

<script setup lang="ts">
useGqlHost("https://jsonplaceholder.ir/graphql");

const { data } = await useAsyncGql("getUsers");
</script> -->

<template>
  <h1>Use useAsyncGql() (http://localhost:3000/api/graphql)</h1>
  <pre v-if="data">{{ data }}</pre>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql("getUsers");
</script>
