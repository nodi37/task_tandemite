<script setup lang="ts">
import userIcon from "@/assets/user.svg?raw";
import VButton from "@/components/ui/VButton.vue";

const userClickHandler = () => {
  confirm("I will open user account element");
};
</script>
<template>
  <VButton variant="ghost" @click="userClickHandler" :icon="userIcon" />
</template>
