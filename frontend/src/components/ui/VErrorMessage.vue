<script setup lang="ts">
defineProps<{ title: string; content: string }>();
</script>
<template>
  <div class="error-message">
    <h2 class="error-message__title">{{ title }}</h2>
    <p class="error-message__content">{{ content }}</p>
  </div>
</template>
<style lang="sass" scoped>
.error-message
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 12px
  color: var(--color-warning-300)
  text-align: center

  &__title
    font-size: 42px
    font-weight: 900
    line-height: 50px

  &__content
    font-size: 24px
    font-weight: 400
    line-height: 30px
</style>
