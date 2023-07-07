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

    <div v-if="showColorPalette" class="widget-option-list__color-palette">
      <button
        v-for="colorOption in COLOR_OPTIONS"
        :key="colorOption"
        :class="[
          'widget-option-list__color-palette-item',
          { 'widget-option-list__color-palette-item--selected': false },
          `widget-option-list__color-palette-item--${colorOption.replace(
            '#',
            ''
          )}`,
        ]"
        :style="`background-color: ${colorOption}`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import {
  AVATAR_OPTIONS,
  COLOR_OPTIONS,
  AVATAR_SPECIFICATION,
} from '@/utils/constant.ts';

import WidgetOptionListItem from '../WidgetOptionListItem/index.vue';

const props = defineProps({
  currentWidget: {
    type: String,
    required: true,
  },
});

const usedOptions = ref([]);
const selectedOption = ref(null);
const showColorPalette = ref(false);

const avatarOptions = computed(() => AVATAR_OPTIONS[props.currentWidget]);
const allowMultipleItems = computed(
  () => AVATAR_SPECIFICATION[props.currentWidget].allowMultiple
);

const handleAddItem = (item) => {
  usedOptions.value.push(item);
  handleShowColorPalette(item);
};

const handleRemoveItem = (item) => {
  const selectedIndex = usedOptions.value.indexOf(item);
  if (selectedIndex === -1) {
    console.error(`item "${item}" not found`);
    return;
  }

  usedOptions.value.splice(selectedIndex, 1);
  handleHideColorPalette();
};

const handleSelect = (item) => {
  selectedOption.value = item;
  handleShowColorPalette(item);
};

const getSelectedOptions = () => {
  selectedOption.value = null;
  usedOptions.value = [];
};

const handleShowColorPalette = (item) => {
  if (usedOptions.value.includes(item)) {
    showColorPalette.value = true;
  } else {
    handleHideColorPalette();
  }
};
const handleHideColorPalette = () => {
  showColorPalette.value = false;
};

watch(
  () => props.currentWidget,
  (val) => {
    getSelectedOptions();
    handleHideColorPalette();
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

  padding: 16px 24px 68px;

  position: relative;

  &__options {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__color-palette {
    position: absolute;
    top: 85%;
    left: 0;
    right: 0;

    width: 100%;
    display: flex;
    gap: 3px;
    flex-wrap: wrap;

    padding: 10px;

    background-color: #fff;
    display: flex;
    max-width: 680px;
    padding: 16px;
    border: 1px solid #e0e5e9;
    border-radius: 8px;
    box-shadow: 0 0 8px #00000040;
    z-index: 99;
    overflow: initial;
    margin: auto;

    &-item {
      border: none;
      width: 24px;
      height: 24px;
      max-width: 24px;
      max-height: 24px;
      border-radius: 24px;
      display: grid;
      align-items: center;
      justify-items: center;
      padding: initial;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      &--FFFFFF {
        border: 1px #83949d solid;
      }

      &--selected {
        border: 2px solid black;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          max-width: 10px;
          max-height: 10px;
          border: 1px solid black;
          background-color: #000;
          border-radius: 10px;
        }
      }

      &--0E202D {
        border-color: #fff;

        &::before {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
