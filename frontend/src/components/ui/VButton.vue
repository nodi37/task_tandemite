<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "ghost";
    color?: "primary" | "secondary";
    rounded?: boolean;
    padded?: boolean;
    icon?: string;
  }>(),
  {
    variant: "default",
    color: "primary",
    padded: true,
    rounded: true,
    icon: undefined,
  }
);
</script>

<template>
  <button
    :class="[
      'button',
      {
        'button--default': variant == 'default',
        'button--ghost': variant == 'ghost',
        'button--rounded': rounded,
        'button--padded': padded,
        'button--primary-color': color == 'primary',
        'button--secondary-color': color == 'secondary',
      },
    ]"
  >
    <div class="button__content">
      <div v-if="icon" class="button__icon" v-html="icon" />
      <slot />
    </div>
  </button>
</template>

<style lang="sass" scoped>
.button
  display: grid
  place-content: center
  color: var(--color-white)
  transition: transform 0.1s, background-color 0.1s

  &__content
    display: flex
    align-items: center
    gap: 12px
    font-size: 16px
    line-height: 19px
    letter-spacing: 2px

  &:active
    transform: translateY(2px)

  &:disabled
    opacity: 0.5

  &--rounded
    border-radius: 99px

  &--padded
    padding: 10px

  &--primary-color
    --button-color: var(--color-primary-600)
    --button-hover-color: var(--color-primary-800)

  &--secondary-color
    --button-color: var(--color-secondary-600)
    --button-hover-color: var(--color-secondary-800)

  &--default
    background-color: var(--button-color)

    &:hover
      background-color: var(--button-hover-color)

  &--ghost
    background-color: transparent

    &:hover
      background-color: var(--button-hover-color)

  &__icon :deep(svg)
    @at-root .button--default &
      display: block
      fill: var(--color-white)
      height: 16px
      width: 16px

    @at-root .button--ghost &
      display: block
      fill: var(--color-gray-800)
      height: 19px
      width: 19px
      transition: fill 0.1s

    @at-root .button--ghost:hover &
      fill: var(--color-white)
</style>
