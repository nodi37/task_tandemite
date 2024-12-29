<script setup lang="ts">
import CartMenuItem from "@/modules/AppHeader/CartMenu/CartMenuItem.vue";
import { useCartStore } from "@/store/cartStore";

const cartStore = useCartStore();
// orderStore = useOrderStore(); ...
</script>

<template>
  <div class="container">
    <h1>Twój koszyk</h1>
    <div v-if="cartStore.cartContent.length === 0">
      <p>Twój koszyk jest pusty</p>
    </div>
    <div class="content" v-else>
      <CartMenuItem
        v-for="{ quantity, product } in cartStore.cartContent"
        v-bind="{ quantity, ...product }"
      />
      <div>
        <strong>Łączna kwota:</strong>
        <span>{{ cartStore.cartWorth.toFixed(2) }} zł</span>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.container
  padding-block: 20px
  max-width: 1200px
  margin: 0 auto

  h1
    margin-bottom: 32px

  .content
    display: flex
    flex-direction: column
    gap: 16px
</style>
