<template>
  <div class="avatar-preview">
    {{ avatarStore.items }}
  </div>
</template>

<script setup lang="ts">
import { useAvatarStore } from '@/stores/avatar.ts';

const avatarStore = useAvatarStore();
</script>

<style lang="scss" scoped>
.avatar-preview {
}
</style>
