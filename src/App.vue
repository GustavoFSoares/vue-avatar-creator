<template>
  <main class="main-page">
    <aside class="avatar-preview">preview</aside>

    <section class="avatar-selecter">
      <WidgetList />
    </section>
  </main>
</template>

<script setup lang="ts">
import WidgetList from './components/WidgetList/index.vue';
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100%;

  display: flex;
  gap: 35px;

  .avatar-preview {
    width: 305px;
    min-height: 300px;
    background: red;
  }
}
</style>
