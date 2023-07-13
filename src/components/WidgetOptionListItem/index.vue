<template>
  <button
    :id="`option-${widgetGroup}-${item}`"
    :class="[
      'widget-option-list-item',
      { 'widget-option-list-item--used': used },
      { 'widget-option-list-item--selected': selected },
    ]"
    @click="handleClick"
  >
    <div v-if="alowed" class="widget-option-list-item__figure">
      <div v-html="svgData" />
    </div>

    <div v-else>{{ item }}</div>

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
import { computed, ref, onMounted } from 'vue';

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
const svgData = ref(null);

const ALLOWED_OPTIONS = ['beard', 'hair', 'glasses', 'headpiece'];

const alowed = computed(() => ALLOWED_OPTIONS.includes(props.widgetGroup));

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

onMounted(async () => {
  if (alowed.value) {
    const svgContent = await import(
      `/public/widget-options/${props.widgetGroup}/${props.item}.svg?raw`
    );

    svgData.value = svgContent.default;
  }
});
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

  &__figure {
    max-width: 80px;
    max-height: 80px;

    display: flex;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
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
