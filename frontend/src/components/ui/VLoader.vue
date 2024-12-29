<script setup lang="ts">
import SpinnerIcon from "@/assets/loading.svg?component";
</script>

<template>
  <div class="loader">
    <SpinnerIcon class="loader__spinner-icon" />
  </div>
</template>
<style lang="scss" scoped>
.loader {
  display: grid;
  place-content: center;

  &__spinner-icon {
    width: 64px;
    height: 64px;
    animation: spin 1s linear infinite;
    fill: var(--color-primary-600);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
