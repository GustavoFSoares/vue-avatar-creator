<template>
  <section class="widget-list">
    <!--<WidgetListItem
      v-for="widgetType in avatarWidgets"
      :key="widgetType"
      :name="widgetType"
      :selected="widgetType === selectedItem"
    />-->

    <WidgetListItem name="beard" />
    <WidgetListItem name="face" />
    <WidgetListItem name="bag" />
  </section>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { AVATAR_WIDGETS } from '@/utils/constant.ts';

import WidgetListItem from '../WidgetListItem/index.vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});

const selectedItem = toRef(props, 'modelValue');

const avatarWidgets = computed(() => AVATAR_WIDGETS);
</script>

<style lang="scss" scoped>
.widget-list {
  display: flex;
  gap: 20px;

  background: #fff;
  border-radius: 8px;
  color: black;
}
</style>
