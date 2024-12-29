<template>
  <div class="container">
    <RouterLink class="container__link" :to="{ name: 'magazines-view' }">
      Przejdź do Czasopisma
    </RouterLink>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding-block: 20px;
  max-width: 1200px;
  margin: 0 auto;

  &__link {
    display: block;
    padding: 10px;
    color: var(--color-white);
    background-color: var(--color-primary-600);
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
  }
}
</style>
