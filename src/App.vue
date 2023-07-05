<template>
  <div class="app-container">
    <div class="app-container__wrapper">
      <div class="app-container__content">
        <main class="main-page">
          <aside class="avatar-preview">preview</aside>

          <section ref="avatarSelectorRef" class="avatar-selector">
            <WidgetList
              v-model="selectedWidget"
              :container-width="containerWidth"
            />
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import WidgetList from './components/WidgetList/index.vue';

const avatarSelectorRef = ref(null);
const selectedWidget = ref(null);

const containerWidth: number = ref(320);

const getContainerWidth = () => {
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
.app-container {
  width: 100vw;
  height: 100vh;

  &__wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  &__content {
    max-width: 1366px;
    margin: 0 auto;
  }
}

.main-page {
  width: 100%;
  height: 100%;
  padding: 50px 0;

  display: flex;
  gap: 35px;

  .avatar-preview {
    min-width: 305px;
    min-height: 300px;
    background: red;
  }

  .avatar-selector {
    width: 100%;
    flex-grow: 1;
  }
}
</style>
