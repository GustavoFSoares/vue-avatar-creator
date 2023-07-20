<template>
  <div class="avatar-preview" v-html="svgContent" />
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useAvatarStore } from '@/stores/avatar.ts';

import { AVATAR_SPECIFICATION } from '@/utils/constant.ts';

const avatarStore = useAvatarStore();

const props = defineProps({
  size: {
    type: Number,
    default: 500,
  },
});

const svgContent = ref(null);

const getCurrentShape = (widget) => {
  console.log(avatarStore.items[widget]);
  return avatarStore.items[widget];
};

const buildAvatar = async (avatarOption) => {
  const buildOrder = ['body', 'pant', 'shoe'];
  console.log(avatarOption);

  // const sortedList = Object.entries(avatarOption.widgets).sort(
  //   ([prevShape, prev], [nextShape, next]) => {
  //     const ix = prev.zIndex ?? AVATAR_LAYER[prevShape]?.zIndex ?? 0;
  //     const iix = next.zIndex ?? AVATAR_LAYER[nextShape]?.zIndex ?? 0;
  //     return ix - iix;
  //   }
  // );

  const shapesPromises = buildOrder.map((shape) => {
    const shapeData = getCurrentShape(shape);

    const svgContent = import(
      `/src/assets/widget-options/${shape}/${shapeData.shape}.svg?raw`
    );

    return svgContent;
  });

  const svgRawList = await Promise.all(shapesPromises).then((raw) => {
    return raw.map((svgRaw, i) => {
      const currentShape = buildOrder[i];

      svgRaw = svgRaw.default;
      const shapeData = getCurrentShape(currentShape);

      const content = svgRaw
        .slice(svgRaw.indexOf('>', svgRaw.indexOf('<svg')) + 1)
        .replace('</svg>', '');
      // .replaceAll('$fillColor', widgetFillColor || 'transparent');

      const avatarSpecificationData = AVATAR_SPECIFICATION[currentShape];

      let transform = '';
      if (
        avatarSpecificationData.x !== undefined &&
        avatarSpecificationData.y !== undefined
      ) {
        transform = `transform="translate(${avatarSpecificationData.x}, ${avatarSpecificationData.y})"`;
      }

      // const [faceWidget] = sortedList;

      // const promises = sortedList.map(async ([widgetType, opt]) => {
      //   if (opt.shape === 'none') {
      //     return '';
      //   }

      //   let svgRaw = (await widgetData[widgetType][opt.shape]()).default;

      //   if (widgetType === 'ear') {
      //     const [_, faceProps] = faceWidget;

      //     const preparedIndexName = faceProps.shape.replace(/(^.)|(-.)/g, (x) => {
      //       let letter = x[1] || x[0];

      //       return letter.toUpperCase();
      //     });

      //     svgRaw = svgRaw.replace('#targetColor', FaceColors[preparedIndexName]);
      //   }

      //   return svgRaw;
      // });

      return `
        <g 
          id="vue-color-avatar-${shapeData.shape}" 
          ${transform}
        >
          ${content}
        </g>
      `;
    });
  });

  return `
    <svg
      width="${300}"
      height="${500}"
      viewBox="0 0 300 500"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(100, 65)">
        ${svgRawList.join('')}
      </g>
    </svg>
  `;
};

watch(
  () => avatarStore.items,
  async () => {
    svgContent.value = await buildAvatar(avatarStore.items);
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
.avatar-preview {
  :deep(#face) {
    display: none;
  }
}
</style>
