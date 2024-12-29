<script setup lang="ts">
import VButton from "@/components/ui/VButton.vue";
import VLoader from "@/components/ui/VLoader.vue";
import { useCartStore } from "@/store/cartStore";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductViewDataLoader } from "./composables/useProductViewDataLoader";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const { state, productData, loadProductData } = useProductViewDataLoader();

onMounted(async () => {
  const productId = route.params.id as string;
  await loadProductData(productId);

  if (state.value == "not-found") {
    router.push({ name: "not-found-view" });
    return;
  }
});
</script>
<template>
  <div class="container">
    <section class="product">
      <VLoader class="product__loader" v-if="state == 'loading'" />
      <div class="product__details" v-if="state == 'success'">
        <img class="product__image" v-bind="productData!.image" />
        <h1 class="product__name">{{ productData!.name }}</h1>
        <p class="product__description">{{ productData!.description }}</p>
        <p class="product__price">{{ productData!.price }} zł</p>
        <p class="product__vat-info">+ 23% VAT</p>
        <VButton
          class="product__add-to-cart-btn"
          color="secondary"
          :rounded="false"
          @click="cartStore.addItemToCart(productData!)"
        >
          Dodaj do koszyka
        </VButton>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 0 8px;
  flex: 1;
}

.product {
  height: 100%;
  max-width: 1206px;
  margin: 0 auto;
  padding-top: 40px;

  &__image {
    width: auto;
    height: auto;
    max-height: 200px;
    margin-bottom: 16px;
  }

  &__loader {
    height: 100%;
    width: 100%;
  }

  &__name {
    color: var(--color-primary-600);
    margin-bottom: 16px;
  }

  &__description {
    color: var(--color-gray-500);
    margin-bottom: 12px;
  }

  &__price {
    font-size: 24px;
    color: var(--color-primary-600);
    font-weight: 500;
  }

  &__vat-info {
    color: var(--color-gray-500);
    font-size: 12px;
  }

  &__add-to-cart-btn {
    margin-top: 8px;
    letter-spacing: 1px;
  }
}
</style>
