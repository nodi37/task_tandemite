<script setup lang="ts">
import searchIcon from "@/assets/magnifying-glass.svg?raw";
import VButton from "@/components/ui/VButtonWithoutBEM.vue";
const searchClickHandler = () => {
  confirm("I will open search modal");
};
</script>
<template>
  <VButton variant="ghost" @click="searchClickHandler" :icon="searchIcon" />
</template>
