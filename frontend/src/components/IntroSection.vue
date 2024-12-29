<script setup lang="ts">
import DecorationShape from "@/assets/decoration-shape.svg?component";

defineProps<{
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}>();
</script>
<template>
  <section class="intro-section">
    <div class="intro-section__center-container">
      <div class="intro-section__content">
        <DecorationShape class="intro-section__decoration" />
        <h1 class="intro-section__title">{{ title }}</h1>
        <p class="intro-section__subtitle">{{ subtitle }}</p>
        <p class="intro-section__description">{{ description }}</p>
      </div>
      <div class="intro-section__image-wrapper">
        <img
          class="intro-section__image"
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.intro-section {
  padding-inline: 8px;
  background-color: var(--color-primary-600);

  &__center-container {
    width: 100%;
    height: 100%;
    max-width: 1206px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @include md {
      flex-direction: row;
      gap: 82px;
    }
  }

  &__content {
    position: relative;
    padding-block: 64px;

    @include md {
      flex: 1;
    }
  }

  &__decoration {
    position: absolute;
    top: -22%;
    right: 68%;
    height: 133%;
    width: auto;
  }

  &__title {
    color: var(--color-white);
    font-weight: bold;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 32px;
  }

  &__subtitle {
    color: var(--color-white);
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  &__description {
    color: var(--color-gray-100);
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
  }

  &__image-wrapper {
    flex: 1;
    display: flex;
    align-items: center;

    @include lg {
      display: block;
      height: 1px;
    }
  }

  &__image {
    display: block;
    height: 300px;
    width: 300px;
    margin: 0 auto;

    @include md {
      height: auto;
      width: auto;
      min-width: 0;
      max-width: 100%;
    }
  }
}
</style>
