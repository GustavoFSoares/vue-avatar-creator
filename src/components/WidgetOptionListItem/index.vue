<template>
  <button
    :class="[
      'widget-option-list-item',
      { 'widget-option-list-item--used': used },
      { 'widget-option-list-item--selected': selected },
    ]"
    @click="handleClick"
  >
    <figure>{{ item }}</figure>

    <div class="widget-option-list-item__action-button">
      <span
        v-if="selected || used"
        :class="[
          'widget-option-list-item__action-label',
          { 'widget-option-list-item__action-label--used': used && !selected },
        ]"
      >
        <span v-if="selected">
          {{ used ? 'remover' : 'user' }}
        </span>

        <span v-else-if="used">usado</span>
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue';
import { AVATAR_OPTIONS } from '@/utils/constant.ts';

const $emit = defineEmits(['add', 'remove', 'select']);
const props = defineProps({
  item: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  widgetGroup: {
    type: String,
    required: true,
  },
  used: {
    type: Boolean,
    default: false,
  },
});

const avatarOptions = computed(() => AVATAR_OPTIONS[props.currentWidget]);

const handleAction = () => {
  if (props.used) {
    $emit('remove');
    return;
  }

  $emit('add');
};

const handleClick = () => {
  if (props.selected) {
    handleAction();
    return;
  }

  $emit('select');
};
</script>

<style lang="scss" scoped>
.widget-option-list-item {
  width: 142px;
  height: 142px;
  background: #fff;

  border: 1px solid #f5f7f8;
  border-radius: 8px;

  cursor: pointer;

  display: grid;
  grid-template-rows: auto 32px;
  align-items: center;
  justify-items: center;

  &--used {
    background-image: url(/assets/avatar/circle.png);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 10px;
    background-size: 80%;
  }

  &--selected {
    border: 1px solid #22d2b3;
    box-sizing: border-box;
    box-shadow: 0 4px 8px #00000040;
  }

  &__action-button {
    text-align: center;
    align-self: flex-start;
    min-width: 130px;
  }

  &__action-label {
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    background-color: #ffbf42;
    border-radius: 10px;
    padding: 4px 8px 2px;
    text-transform: capitalize;

    &--used {
      background-color: #22d2b3;
    }
  }
}
</style>
