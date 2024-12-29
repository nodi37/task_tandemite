<script setup lang="ts">
import CancelIcon from "@/assets/cancel.svg?component";
</script>

<template>
  <button class="button">
    <CancelIcon class="button__icon" />
  </button>
</template>
<style lang="scss" scoped>
.button {
  padding: 13px;
  background-color: var(--color-primary-600);

  &__icon {
    display: block;
    height: 15px;
    width: 15px;
    fill: var(--color-white);
  }
}
</style>
