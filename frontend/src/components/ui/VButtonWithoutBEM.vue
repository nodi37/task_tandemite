<script setup lang="ts">
import { useCssModule } from "vue";

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

const styles = useCssModule();
</script>

<template>
  <button
    :class="[
      styles.button,
      styles[variant],
      styles[color],
      {
        [styles.rounded]: rounded,
        [styles.padded]: padded,
      },
    ]"
  >
    <div :class="styles.content">
      <div v-if="icon" :class="styles.icon" v-html="icon" />
      <slot />
    </div>
  </button>
</template>

<style lang="scss" module>
.button {
  display: grid;
  place-content: center;
  color: var(--color-white);
  transition: transform 0.1s, background-color 0.1s;

  .content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2px;
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    opacity: 0.5;
  }

  &.rounded {
    border-radius: 99px;
  }

  &.padded {
    padding: 10px;
  }

  // Colors
  &.primary {
    --button-color: var(--color-primary-600);
    --button-hover-color: var(--color-primary-800);
  }

  &.secondary {
    --button-color: var(--color-secondary-600);
    --button-hover-color: var(--color-secondary-800);
  }

  // Variants
  &.default {
    background-color: var(--button-color);

    &:hover {
      background-color: var(--button-hover-color);
    }

    .icon {
      display: block;
      fill: var(--color-white);
      height: 16px;
      width: 16px;
    }
  }

  &.ghost {
    background-color: transparent;

    &:hover {
      background-color: var(--button-hover-color);
    }

    .icon {
      display: block;
      fill: var(--color-gray-800);
      height: 19px;
      width: 19px;
      transition: fill 0.1s;
    }

    &:hover .icon {
      fill: var(--color-white);
    }
  }
}
</style>
