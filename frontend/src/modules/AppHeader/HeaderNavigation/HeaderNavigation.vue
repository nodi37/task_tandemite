<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

export type NavigationItem = {
  name: string;
  label: string;
};

defineProps<{
  items: Array<NavigationItem>;
}>();

const opened = ref(false);
</script>
<template>
  <div class="navigation">
    <button @click="opened = !opened" class="navigation__activator">☰</button>
    <nav :class="['navigation__nav', { 'navigation__nav--active': opened }]">
      <RouterLink
        v-for="{ name, label } in items"
        :to="{ name }"
        class="navigation__link"
        exact-active-class="navigation__link--active"
      >
        {{ label }}
      </RouterLink>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.navigation {
  position: relative;

  &__activator {
    font-size: 24px;

    @include lg {
      display: none;
    }
  }

  &__nav {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;

    @include lg {
      top: unset;
      right: unset;
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 36px;
      height: 100%;
    }

    &--active {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      box-shadow: 5px 5px 15px rgba(0, 88, 81, 0.1);
      padding: 20px 50px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-gray-800);
  }

  &__link:hover {
    color: var(--color-primary-600);
  }

  &__link--active {
    color: var(--color-primary-600);
  }
}
</style>
