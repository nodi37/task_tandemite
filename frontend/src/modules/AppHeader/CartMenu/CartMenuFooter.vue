<script setup lang="ts">
import VButton from "@/components/ui/VButton.vue";

defineProps<{
  price: number;
}>();

defineEmits<{
  (e: "goToCart"): void;
}>();
</script>

<template>
  <div class="footer">
    <div class="footer__content">
      <strong> Łączna kwota </strong>
      <div class="footer__total-price">
        <strong>{{ price.toFixed(2) }} zł</strong>
        + VAT 23%
      </div>
    </div>
    <VButton
      @click="() => $router.push({ name: 'cart-view' })"
      color="secondary"
      class="footer__button"
      :rounded="false"
      block
    >
      PRZEJDŹ DO KOSZYKA
    </VButton>
  </div>
</template>
<style lang="sass" scoped>
.footer
  display: flex
  flex-direction: column
  padding: 0 34px 28px 34px

  &__content
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 18px
    color: var(--color-gray-800)

    & > strong
      font-weight: 700

  &__total-price
    display: flex
    flex-direction: column
    gap: 4px
    font-size: 14px
    line-height: 24px
    font-weight: 300
    color: var(--color-gray-800)

    & > strong
      font-size: 22px
      line-height: 24px
      font-weight: 900

  &__button
    padding: 16px
</style>
