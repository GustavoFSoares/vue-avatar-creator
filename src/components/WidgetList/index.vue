<template>
  <section class="widget-list"></section>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});
</script>
