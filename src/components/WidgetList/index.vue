<template>
  <section
    class="widget-list"
    :style="[{ '--container-width': `${containerWidth}px` }]"
  >
    <swiper :slides-per-view="slidesPerView" :space-between="5">
      <swiper-slide
        v-for="widget in avatarWidgets"
        :key="widget"
        class="widget-list__slide"
      >
        <WidgetListItem
          :name="widget"
          :selected="widget === selectedItem"
          @select="handleSelect(widget)"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { computed, watch, ref, onMounted } from 'vue';
import { AVATAR_WIDGETS } from '@/utils/constant.ts';

import WidgetListItem from '../WidgetListItem/index.vue';
const $emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  containerWidth: {
    type: Number,
    required: true,
  },
});

const selectedItem = ref(props.modelValue);

const avatarWidgets = computed(() => AVATAR_WIDGETS);
const slidesPerView = computed(() => {
  if (props.containerWidth < 400) {
    return 4.3;
  }

  if (props.containerWidth < 500) {
    return 6.7;
  }

  if (props.containerWidth < 600) {
    return 9.2;
  }

  if (props.containerWidth < 800) {
    return 12.7;
  }

  if (props.containerWidth < 1000) {
    return 15.4;
  }

  return avatarWidgets.value.length;
});

const handleSelect = (selectedWidget) => {
  selectedItem.value = selectedWidget;
};

watch(
  () => selectedItem.value,
  (val) => {
    $emit('update:modelValue', val);
  }
);

onMounted(() => {
  if (!selectedItem.value) {
    const [first] = avatarWidgets.value;
    selectedItem.value = first;
  }
});
</script>

<style lang="scss" scoped>
.widget-list {
  background: #fff;
  max-width: var(--container-width);
  border-radius: 8px;
  height: 72px;
  display: flex;

  &__slide {
    text-align: center;
    font-size: 18px;
    color: black !important;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
