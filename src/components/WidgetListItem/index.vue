<template>
  <section class="widget-list-item">
    <suspense>
      <template #default>
        <component :is="AsyncComp" />
      </template>

      <template #fallback> ldg </template>
    </suspense>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const AsyncComp = computed(() =>
  defineAsyncComponent(() => {
    return new Promise((resolve) => {
      const iconComponent = import(
        `../icons/widget-options/${props.name}.svg?component`
      );

      resolve(iconComponent);
    });
  })
);
</script>

<style lang="scss" scoped>
.widget-list-item {
  width: 48px;
  height: 48px;
  overflow: hidden;
  color: black;
}
</style>
