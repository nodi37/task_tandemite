<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import IntroSection from "@/components/IntroSection.vue";
import { useCartStore } from "@/store/cartStore";
import VPagination from "@/components/ui/VPagination.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import VLoader from "@/components/ui/VLoader.vue";
import VErrorMessage from "@/components/ui/VErrorMessage.vue";
import { scrollElementIntoView } from "@/utils/scrollElementIntoView";
import { useMagazinesViewContentManager } from "./composables/useMagazinesViewContentManager";

const introSectionData = {
  title: "Czasopisma",
  subtitle:
    "Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który tym razem poświęcony jest wdużej części zmianom w podatkach w roku 2019. ",
  description:
    "Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztówużywania samochodów osobowych, wprowadzenie „exit tax” czy zmiany dotyczącepoboru podatku u źródła na gruncie podatków dochodowych, poświęcając imodrębne artykuły.",
  image: {
    src: "/kazus-podatkowy.webp",
    alt: "Kazus podatkowy",
    width: 1096,
    height: 1057,
  },
};
const contentHeaderId = "magazines-page-header";

// Utils
const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const contentManager = useMagazinesViewContentManager();

// State
const isViewMounted = ref(false);
const currentPage = ref(1);

watch(currentPage, async (newPage) => {
  if (!isViewMounted.value) return; // Avoids double loading on mount if page is in url query param
  scrollElementIntoView(contentHeaderId);
  router.push({ query: { page: newPage } });
  await contentManager.loadMagazines(newPage);
});

onMounted(async () => {
  if (route.query.page) {
    currentPage.value = Number(route.query.page);
  }

  await contentManager.loadMagazines(currentPage.value);

  if (currentPage.value > contentManager.data.totalPages) {
    // To consider 404 page or redirect to the last page
    router.push({ name: "not-found-view" });
    return;
  }

  isViewMounted.value = true;
});
</script>
<template>
  <IntroSection v-bind="introSectionData" />
  <div class="container">
    <section class="magazines">
      <h2 :id="contentHeaderId" class="magazines__heading">
        Wyszukaj czasopismo
      </h2>
      <!-- We could adjust loader height to be the same as items-grid ie know how many elements and rows will be there  -->
      <!-- This would give smooth transition between loads -->
      <VLoader
        class="magazines__loader"
        v-if="contentManager.state.value == 'loading'"
      />
      <VErrorMessage
        v-if="contentManager.state.value == 'error'"
        class="magazines__loading-error"
        title="Wystąpił błąd"
        content="Nie mogliśmy załadować teraz danych, spróbuj ponownie później"
      />
      <div
        class="magazines__items-grid"
        v-if="contentManager.state.value == 'loaded'"
      >
        <ProductCard
          v-for="magazine in contentManager.data.products"
          v-bind="magazine"
          :redirectTo="{ name: 'product-view', params: { id: magazine.id } }"
          @add-to-cart="cartStore.addItemToCart"
        />
      </div>
      <VPagination
        class="magazines__pagination"
        :pagesCount="contentManager.data.totalPages"
        v-model="currentPage"
      />
    </section>
  </div>
</template>
<style lang="sass" scoped>
.container
  padding: 0 8px

.magazines
  max-width: 1206px
  margin: 0 auto

  &__heading
    font-size: 42px
    font-weight: 900
    line-height: 50px
    color: var(--color-primary-600)
    margin: 40px 0 60px 0

    @include md
      margin: 124px 0 88px 0

  &__loader
    margin-block: 250px

  &__loading-error
    margin-block: 120px

  &__items-grid
    display: grid
    gap: 33px 20px
    margin-bottom: 38px
    grid-template-columns: 1fr

    @include sm
      grid-template-columns: repeat(2, 1fr)

    @include lg
      grid-template-columns: repeat(4, 1fr)

  &__pagination
    display: flex
    justify-content: center
    margin-bottom: 74px
</style>
