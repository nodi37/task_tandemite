<script setup lang="ts">
import { RouterLinkProps } from "vue-router";

defineProps<{
  redirectTo: RouterLinkProps["to"];
  name: string;
  price: number;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}>();
</script>
<template>
  <RouterLink :to="redirectTo" class="product-card">
    <img
      class="product-card__image"
      :src="image.src"
      :alt="image.alt"
      :height="image.height"
      :width="image.width"
    />
    <div class="product-card__content">
      <p class="product-card__name">{{ name }}</p>
      <p class="product-card__price">{{ price.toFixed(2) }} zł</p>
      <span class="product-card__vat-info">+ VAT 23%</span>
      <span class="product-card__cta">Szczegóły</span>
    </div>
  </RouterLink>
</template>
<style lang="scss" scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__image {
    display: block;
    width: 163px;
    height: 190px;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: -65px;
    z-index: 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 85px 30px 28px 30px;
    color: var(--color-primary-600);
    text-align: center;
    border: 1px solid transparent;
    transition: all 0.2s;

    @at-root {
      .product-card:hover & {
        color: var(--color-secondary-600);
        box-shadow: 20px 20px 40px #2e383826;
        border-color: #d1b352;
      }
    }
  }

  &__name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 18px;
    font-weight: 900;
    line-height: 26px;
    margin-bottom: 4px;
  }

  &__price {
    margin-top: auto;
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    margin-bottom: 8px;
  }

  &__vat-info {
    display: block;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    margin: 0 0 14px 0;
  }

  &__cta {
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
  }
}
</style>
