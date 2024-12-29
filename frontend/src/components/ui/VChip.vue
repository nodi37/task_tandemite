<script setup lang="ts">
defineProps<{
  text?: string;
  // color?: primary default | secondary
}>();
</script>
<template>
  <div class="chip">
    <div v-if="text" class="chip__text">{{ text }}</div>
    <slot />
  </div>
</template>
<style lang="sass" scoped>
.chip
  position: relative

  &__text
    display: grid
    place-content: center
    position: absolute
    top: 2px
    right: 2px
    width: 13px
    height: 13px
    border-radius: 99px
    background-color: var(--color-secondary-600)
    font-size: 10px
    color: var(--color-white)
    z-index: 10
    cursor: default
</style>
