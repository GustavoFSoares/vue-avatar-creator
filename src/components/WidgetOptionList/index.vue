<template>
  <section class="widget-option-list">
    <div class="widget-option-list__options">
      <WidgetOptionListItem
        v-for="optionItem in [...avatarOptions, ...avatarOptions]"
        :key="optionItem"
        :item="optionItem"
        :widget-group="currentWidget"
        :selected="selectedOption === optionItem"
        :used="usedOptions.includes(optionItem)"
        @add="handleAddItem(optionItem)"
        @remove="handleRemoveItem(optionItem)"
        @select="handleSelect(optionItem)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue';
import { AVATAR_OPTIONS } from '@/utils/constant.ts';

import WidgetOptionListItem from '../WidgetOptionListItem/index.vue';

const props = defineProps({
  currentWidget: {
    type: String,
    required: true,
  },
});

const usedOptions = ref([]);
const selectedOption = ref(null);

const avatarOptions = computed(() => AVATAR_OPTIONS[props.currentWidget]);

const handleAddItem = (item) => {
  usedOptions.value.push(item);
};

const handleRemoveItem = (item) => {
  const selectedIndex = usedOptions.value.indexOf(item);
  if (selectedIndex === -1) {
    console.error(`item "${item}" not found`);
    return;
  }

  usedOptions.value.splice(selectedIndex, 1);
};

const handleSelect = (item) => {
  selectedOption.value = item;
};

const getSelectedOptions = () => {
  selectedOption.value = null;
  usedOptions.value = [];
};

watch(
  () => props.currentWidget,
  (val) => {
    getSelectedOptions();
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.widget-option-list {
  background: #fff;
  border-radius: 8px;
  display: flex;
  color: black;

  padding: 16px 24px;

  &__options {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>
