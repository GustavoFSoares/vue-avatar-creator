import { createPinia } from 'pinia';

import AvatarCreatorOptionsComponent from '@/partials/AvatarCreatorOptions/index.vue';
import AvatarCreatorViewerComponent from '@/partials/AvatarCreatorViewer/index.vue';
import {
  useAvatarStore,
  defaultAvatar as defaultAvatarData,
} from '@/stores/avatar.ts';

export const AvatarCreatorOptions = AvatarCreatorOptionsComponent;
export const AvatarCreatorViewer = AvatarCreatorViewerComponent;
export const useAvatarCreatorStore = useAvatarStore;
export const defaultAvatar = defaultAvatarData;

export default {
  install(app, options) {
    app.use(createPinia());

    app.component(AvatarCreatorOptions);
    app.component(AvatarCreatorViewer);
  },
};
