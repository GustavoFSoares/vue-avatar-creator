<template>
  <div class="app-container">
    <div class="app-container__wrapper">
      <div class="app-container__content">
        <main class="main-page">
          <aside class="avatar-preview">
            <AvatarCreatorViewer />
          </aside>

          <section class="avatar-options">
            <AvatarCreatorOptions />
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarCreatorViewer from './partials/AvatarCreatorViewer/index.vue';
import AvatarCreatorOptions from './partials/AvatarCreatorOptions/index.vue';
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

  .avatar-options {
    width: 100%;
  }
}
</style>
