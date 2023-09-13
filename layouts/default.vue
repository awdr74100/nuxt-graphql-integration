<template>
  <ul>
    <li class="link" @click.prevent="$router.push('/')">/</li>
    <li class="link" @click.prevent="$router.push('/user')">/user</li>
    <li class="link" @click.prevent="$router.push('/photos')">/photos</li>

  </ul>
  <slot />
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  cursor: pointer;
}
</style>
