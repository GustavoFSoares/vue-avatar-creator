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
    'soccer',
    'coat',
    'necklace',
    'glasses',
    'gedgets',
    'headpiece',
    'bag',
    'accessibility-item',
  ];

  const preparedBuildOrder = avatarOption
    .filter((avatarItem) => buildOrder.includes(avatarItem.type))
    .sort((a, b) => buildOrder.indexOf(a.type) - buildOrder.indexOf(b.type));

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

      &__bag {
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

      &__accessibility-item {
        &--accessibility-item-1 {
          transform: translate(103px, 40px);
        }

        &--body-1 {
          &--accessibility-item-1 {
            transform: translate(13px, 130px);
          }

          &--accessibility-item-2 {
            transform: translate(0, 110px);
          }

          &--accessibility-item-3 {
            transform: translate(12px, 99px);
          }

          &--accessibility-item-4 {
            transform: translate(110px, 152px);
          }

          &--accessibility-item-5 {
            transform: translate(12px, 80px);
          }

          &--accessibility-item-6 {
            transform: translate(108px, 150px);
          }

          &--accessibility-item-7 {
            transform: translate(37px, 292px);
          }

          &--accessibility-item-8 {
            transform: translate(86px, 292px);
          }

          &--accessibility-item-9 {
            transform: translate(86px, 292px);
          }
        }
      }
    }
  }
}
</style>
