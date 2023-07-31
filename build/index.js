import { createPinia } from 'pinia';

import AvatarCreatorOptions from '@/partials/AvatarCreatorOptions/index.vue';
import AvatarCreatorViewer from '@/partials/AvatarCreatorViewer/index.vue';

export const AvatarCreatorOptionsComponent = AvatarCreatorOptions;
export const AvatarCreatorViewerComponent = AvatarCreatorViewer;

export default {
  install(app, options) {
    console.log('HERE');
    app.use(createPinia());

    app.component(AvatarCreatorOptions);
    app.component(AvatarCreatorViewer);
  },
};
