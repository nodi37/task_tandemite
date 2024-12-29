<script setup lang="ts">
import VButton from "@/components/ui/VButton.vue";
import VChip from "@/components/ui/VChip.vue";
import bagIcon from "@/assets/bag.svg?raw";
import { ref, watch } from "vue";
import VOverlay from "@/components/ui/VOverlay.vue";
import { useCartStore } from "@/store/cartStore";
import CartMenuItem from "./CartMenuItem.vue";
import CartMenuCloseButton from "./CartMenuCloseButton.vue";
import CartMenuFooter from "./CartMenuFooter.vue";
import VDivider from "@/components/ui/VDivider.vue";
import { useRoute } from "vue-router";

const cartActive = ref(false);
const route = useRoute();
const cartStore = useCartStore();

watch(
  () => route.name,
  () => {
    cartActive.value = false;
  }
);
</script>

<template>
  <div class="cart">
    <VChip :text="cartStore.itemsCount.toString()">
      <VButton
        class="cart__activator"
        @click="cartActive = !cartActive"
        variant="ghost"
        :icon="bagIcon"
      />
    </VChip>
    <div v-if="cartActive" class="cart__body">
      <div class="cart__content">
        <CartMenuCloseButton
          class="cart__close-button"
          @click="cartActive = false"
        />
        <p class="cart__title">Twój koszyk</p>
        <div class="cart__items-wrapper">
          <CartMenuItem
            v-for="{ quantity, product } in cartStore.cartContent"
            v-bind="{ quantity, ...product }"
            @delete="() => cartStore.deleteItemFromCart(product.id)"
          />
        </div>
        <VDivider class="cart__divider" />
        <CartMenuFooter :price="cartStore.cartWorth" />
      </div>
    </div>
  </div>
  <Teleport defer to="main">
    <VOverlay v-if="cartActive" @click="cartActive = false" />
  </Teleport>
</template>

<style lang="sass" scoped>
.cart
  position: relative

  &__body
    position: absolute
    top: 64px
    right: 0
    box-shadow: 5px 5px 15px #00585112
    width: 381px
    background-color: var(--color-white)
    display: flex
    flex-direction: column
    max-height: calc(100vh - 100px)
    overflow: hidden

  &__close-button
    position: absolute
    top: 0
    right: 0

  &__content
    position: relative
    max-width: 381px
    padding-top: 16px
    height: 100%
    overflow: hidden
    flex: 1
    display: flex
    flex-direction: column

  &__title
    font-size: 18px
    line-height: 30px
    font-weight: bold
    margin: 0 0 16px 34px

  &__items-wrapper
    flex: 1
    display: flex
    flex-direction: column
    gap: 11px
    padding-inline: 34px
    padding-bottom: 4px
    overflow-y: auto
    overflow-x: hidden

  &__divider
    width: 100%
    height: 1px
    color: var(--color-gray-500)
    opacity: 0.35
    margin: 20px 0 25px 0
</style>
