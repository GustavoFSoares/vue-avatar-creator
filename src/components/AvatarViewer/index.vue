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

const buildAvatar = async (avatarOption) => {
  const buildOrder = [
    'body',
    'face',
    'pant',
    'shoe',
    'tshirt',
    'dress',
    'coat',
    'necklace',
    'glasses',
    'gedgets',
    'headpiece',
  ];

  const preparedBuildOrder = avatarOption
    .filter((avatarItem) => buildOrder.includes(avatarItem.type))
    .sort((a, b) => buildOrder.indexOf(a.type) - buildOrder.indexOf(b.type));

  console.log(avatarOption, preparedBuildOrder);
  // const buildOrder = ['body', 'face', 'pant', 'tshirt'];

  // const sortedList = Object.entries(avatarOption.widgets).sort(
  //   ([prevShape, prev], [nextShape, next]) => {
  //     const ix = prev.zIndex ?? AVATAR_LAYER[prevShape]?.zIndex ?? 0;
  //     const iix = next.zIndex ?? AVATAR_LAYER[nextShape]?.zIndex ?? 0;
  //     return ix - iix;
  //   }
  // );

  // const shapesOrder = buildOrder.reduce<{ shape: string; item: string }>(
  //   (amount, shape) => {
  //     const shapeData = getCurrentShape(shape);

  //     if (!shapeData) {
  //       return amount;
  //     }

  //     // if (Array.isArray(shapeData)) {
  //     //   const preparedShapeList = shapeData.map((shapeItem) => ({
  //     //     shape,
  //     //     item: shapeItem.shape,
  //     //   }));

  //     //   amount = [...amount, ...preparedShapeList];
  //     // } else {
  //     //   amount.push({ shape, item: shapeData.shape });
  //     // }

  //     return amount;
  //   },
  //   []
  // );

  const shapesPromises = preparedBuildOrder.map(({ shape, type }) => {
    const svgContent = import(
      `/src/assets/widget-options/${type}/${shape}.svg?raw`
    );

    return svgContent;
  });

  const svgRawList = await Promise.all(shapesPromises).then((raw) => {
    return raw.map((svgRaw, i) => {
      if (!svgRaw) {
        return null;
      }

      const shapeData = preparedBuildOrder[i];

      svgRaw = svgRaw.default;

      const content = svgRaw
        .slice(svgRaw.indexOf('>', svgRaw.indexOf('<svg')) + 1)
        .replace('</svg>', '');
      // .replaceAll('$fillColor', widgetFillColor || 'transparent');

      const avatarSpecificationData = AVATAR_SPECIFICATION[shapeData.type];

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
          class="avatar-item__${shapeData.type} avatar-item__${shapeData.type}--${shapeData.shape}"
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
  :deep {
    .avatar-item {
      &__gedgets {
        &--gedgets-1 {
          transform: translate(-25px, 40px);
        }

        &--gedgets-2 {
          transform: translate(30px, 80px);
        }

        &--gedgets-3 {
          transform: translate(37px, 70px);
        }

        &--gedgets-4 {
          transform: translate(37px, 60px);
        }

        &--gedgets-5,
        &--gedgets-6,
        &--gedgets-7 {
          transform: translate(82px, 157px);
        }

        &--gedgets-8 {
          transform: translate(37px, 15px);
        }
      }

      &__headpiece {
        transform: translate(40px, -28px);

        &--headpiece-3 {
          transform: translate(55px, -35px);
        }

        &--headpiece-6 {
          transform: translate(40px, 2px);
        }

        &--headpiece-7 {
          transform: translate(40px, 11px);
        }

        &--headpiece-8 {
          transform: translate(40px, -45px);
        }

        &--headpiece-9 {
          transform: translate(40px, -42px);
        }
      }
    }
  }
}
</style>
