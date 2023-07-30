<template>
  <div ref="avatarSelectorRef" class="avatar-options">
    <WidgetList v-model="selectedWidget" :container-width="containerWidth" />

    <WidgetOptionList v-if="selectedWidget" :current-widget="selectedWidget" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import WidgetList from '../../components/WidgetList/index.vue';
import WidgetOptionList from '../../components/WidgetOptionList/index.vue';

const avatarSelectorRef = ref(null);
const selectedWidget = ref(null);

const containerWidth: number = ref(320);

const getContainerWidth = () => {
  console.dir(avatarSelectorRef.value.clientWidth);
  containerWidth.value = avatarSelectorRef.value.clientWidth;
};

onMounted(() => {
  getContainerWidth();

  window.addEventListener('resize', () => {
    getContainerWidth();
  });
});
</script>

<style lang="scss" scoped>
.avatar-options {
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
