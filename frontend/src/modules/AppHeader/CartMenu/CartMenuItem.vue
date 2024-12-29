<script setup lang="ts">
import PinIcon from "@/assets/location-pin.svg?component";
import BookIcon from "@/assets/book.svg?component";
import BinIcon from "@/assets/rubbish-bin.svg?component";

export type CartMenuItemProps = {
  id: string;
  type: "magazine" | "course";
  name: string;
  price: number;
  quantity: number;
};

defineProps<CartMenuItemProps>();
defineEmits<{ (e: "delete"): void }>();
</script>
<template>
  <div class="item">
    <div class="item__info-container">
      <div class="item__icon-wrapper">
        <PinIcon class="item__icon" v-if="type == 'course'" />
        <BookIcon class="item__icon" v-else />
      </div>
      <p class="item__name">{{ name }}</p>
      <button class="item__delete-button" @click="() => $emit('delete')">
        <BinIcon class="item__delete-button-icon" />
      </button>
    </div>
    <div class="item__price-container">
      <span>Cena</span>
      <span class="item__quantity-info">{{ quantity }}x</span>
      <strong>{{ price.toFixed(2) }} zł</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  background-color: #f1f5f567;
  padding: 9px 11px;

  &__info-container {
    display: flex;
    gap: 13px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f5f5;
  }

  &__icon-wrapper {
    flex-shrink: 0;
    width: 52px;
    height: 52px;
    border-radius: 999px;
    background-color: #f1f5f5;
    display: grid;
    place-content: center;
  }

  &__icon {
    max-width: 100%;
    max-height: 100%;
  }

  &__name {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-primary-600);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  &__delete-button {
    padding-right: 7px;
  }

  &__delete-button-icon {
    fill: var(--color-gray-500);
    height: 15px;
    width: 15px;
  }

  &__price-container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 9px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    color: var(--color-gray-800);

    & strong {
      font-size: 18px;
      line-height: 30px;
      font-weight: 700;
    }
  }

  &__quantity-info {
    margin-left: auto;
    color: var(--color-gray-500);
  }
}
</style>
