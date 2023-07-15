'
<template>
  <div
    :class="['widget-list-item', { 'widget-list-item--selected': selected }]"
    @click="handleClick"
  >
    <img :key="name" :src="`/widget-list/${name}.png`" />
  </div>
</template>

<script setup lang="ts">
const $emit = defineEmits(['select']);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
});

const handleClick = () => {
  $emit('select');
};
</script>

<style lang="scss" scoped>
.widget-list-item {
  min-width: 48px;
  min-height: 48px;
  max-height: 48px;
  max-width: 48px;

  width: 100%;
  height: 100%;

  cursor: pointer;

  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.5s ease;

  &--selected {
    border: 1px solid #f5f7f8;
    box-sizing: border-box;
    box-shadow: 0 4px 8px #6923984d;
    cursor: initial;
  }

  img {
    max-width: 35px;
    max-height: 35px;
  }
}
</style>
