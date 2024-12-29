<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  pagesCount: number;
}>();

const model = defineModel<number>();
const isFirstPage = computed(() => !model.value || model.value == 1);
const isLastPage = computed(() => model.value == props.pagesCount);
const buttonsCount = computed(() =>
  props.pagesCount < 5 ? props.pagesCount : 5
);

// Helpers
const calculateButtonNumber = (index: number) =>
  model.value! > 3 ? model.value! - 3 + index : index;

// Handlers
const goToPage = (page: number) => {
  model.value = page;
};
const nextPage = () => {
  model.value = model.value! + 1;
};
const prevPage = () => {
  model.value = model.value! - 1;
};
</script>
<template>
  <nav class="pagination" aria-label="pagination">
    <button
      class="pagination__button pagination__button-chevron"
      :disabled="isFirstPage"
      @click="prevPage"
    >
      &lsaquo;
    </button>
    <button
      v-for="i in buttonsCount"
      :class="[
        'pagination__button',
        { 'pagination__button--active': calculateButtonNumber(i) === model },
      ]"
      :disabled="calculateButtonNumber(i) > pagesCount"
      @click="() => goToPage(calculateButtonNumber(i))"
    >
      {{ calculateButtonNumber(i) }}
    </button>
    <button
      class="pagination__button pagination__button-chevron"
      :disabled="isLastPage"
      @click="nextPage"
    >
      &rsaquo;
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  overflow: hidden;

  &__button {
    height: 33px;
    width: 33px;
    display: grid;
    place-items: center;
    font-size: 12px;
    line-height: 24px;
    color: var(--color-gray-500);
  }

  &__button--active {
    font-size: 14px;
    font-weight: bold;
    background-color: var(--color-primary-600);
    color: var(--color-white);
  }

  &__button-chevron {
    font-size: 16px;
  }
}
</style>
