<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.vue";
import SearchMenu from "./SearchMenu/SearchMenu.vue";
import AccountMenu from "./AccountMenu/AccountMenu.vue";
import { CartMenu } from "./CartMenu";
import { headerNavRoutes } from "@/router";
</script>
<template>
  <header class="header">
    <div class="header__content">
      <RouterLink :to="{ name: 'main' }">
        <img class="header__logo" width="335" height="87" src="/logo.png" />
      </RouterLink>
      <HeaderNavigation class="header__nav" :items="headerNavRoutes" />
      <div class="header__controls">
        <SearchMenu />
        <AccountMenu />
        <CartMenu />
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 89px;
  border-bottom: 1px solid var(--color-gray-100);
  padding-inline: 8px;
  background-color: var(--color-white);
  z-index: 100;

  &__content {
    width: 100%;
    height: 100%;
    max-width: 1206px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  &__logo {
    display: block;
    height: 44px;
    width: auto;
  }

  &__nav {
    margin-left: auto;
  }

  &__controls {
    display: flex;
    gap: 4px;
    margin-left: 12px;

    @include xl {
      gap: 10px;
      margin-left: 73px;
    }
  }
}
</style>
