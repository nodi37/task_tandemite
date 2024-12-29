<script setup lang="ts">
import { RouterView } from "vue-router";
import { AppHeader } from "@/modules";
</script>

<template>
  <AppHeader class="header" />
  <main id="main">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.header {
  flex-shrink: 0;
}

main {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
