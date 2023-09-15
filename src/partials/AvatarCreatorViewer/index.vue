<template>
  <div class="avatar-preview" v-html="svgContent" />
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useAvatarStore } from '@/stores/avatar.ts';

import mapAvatarConfigurator from '@/hooks/avatarHelper';

const avatarStore = useAvatarStore();

const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 500,
  },
  viewMode: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: null,
  },
});

const svgContent = ref(null);

const buildAvatar = async (avatarOption) => {
  const buildOrder = [
    'body',
    'tshirt',
    'dress',
    'coat',
    'hair',
    'face',
    'beard',
    'pant',
    'shoe',
    'soccer',
    'necklace',
    'glasses',
    'gedgets',
    'headpiece',
    'bag',
    'accessibility-item',
  ];

  const preparedBuildOrder = avatarOption
    .filter(
      (avatarItem) => buildOrder.includes(avatarItem.type) && avatarItem.shape
    )
    .sort((a, b) => buildOrder.indexOf(a.type) - buildOrder.indexOf(b.type));

  const shapesPromises = preparedBuildOrder.map(({ shape, type }) => {
    const svgContent = import(
      `../../assets/widget-options/${type}/${shape}.svg?raw`
    );

    return svgContent;
  });

  const [bodyShape] = preparedBuildOrder;

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

      return `
        <g 
          class="avatar-body__${bodyShape.shape} avatar-item__${shapeData.type} avatar-item__${shapeData.type}--${shapeData.shape}"
        >
          ${content}
        </g>
      `;
    });
  });

  return `
    <svg
      width="${props.width}"
      height="${props.height}"
      viewBox="0 0 ${props.width} ${props.height}"
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
  () => {
    if (!props.viewMode) {
      return avatarStore.items;
    }

    return props.data;
  },
  async (avatarData) => {
    const avatarItens = mapAvatarConfigurator(avatarData);

    svgContent.value = await buildAvatar(avatarItens);
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
.avatar-preview {
  min-width: 305px;
  min-height: 300px;
  max-width: 305px;

  :deep {
    content: '';

    .avatar-item__beard {
      #face {
        display: none;
      }
    }

    .avatar-body__body-1 {
      &.avatar-item {
        &__coat {
          transform: translate(-7px, 60px);
        }

        &__dress {
          transform: translate(-7px, 72px);
        }

        &__face {
          transform: translate(44px, 8px);
        }

        &__glasses {
          transform: translate(38px, 13px);
        }

        &__necklace {
          transform: translate(41px, 69px);
        }

        &__pant {
          transform: translate(28px, 164px);
        }

        &__shoe {
          transform: translate(9px, 271px);
        }

        &__tshirt {
          transform: translate(-3px, 58px);
        }

        &__gedgets {
          &--gedgets-1 {
            transform: translate(-25px, 40px);
          }

          &--gedgets-2 {
            transform: translate(27px, 59px);
          }

          &--gedgets-3 {
            transform: translate(23px, 56px);
          }

          &--gedgets-4 {
            transform: translate(23px, 45px);
          }

          &--gedgets-5,
          &--gedgets-6,
          &--gedgets-7 {
            transform: translate(69px, 138px);
          }

          &--gedgets-8 {
            transform: translate(24px, 0px);
          }
        }

        &__headpiece {
          transform: translate(26px, -40px);

          &--headpiece-3 {
            transform: translate(44px, -50px);
          }

          &--headpiece-6 {
            transform: translate(26px, -15px);
          }

          &--headpiece-7 {
            transform: translate(26px, -6px);
          }

          &--headpiece-8 {
            transform: translate(26px, -61px);
          }

          &--headpiece-9 {
            transform: translate(26px, -53px);
          }
        }

        &__bag {
          transform: translate(17px, 73px);

          &--body-1--bag-2 {
            transform: translate(25px, 73px);
          }

          &--body-1--bag-3 {
            transform: translate(55px, -35px);
          }

          &--body-1--bag-4 {
            transform: translate(-38px, 277px);
          }
        }

        &__accessibility-item {
          &--accessibility-item-1 {
            transform: translate(90px, 24px);
          }

          &--body-1--accessibility-item-1 {
            transform: translate(-19px, 107px);
          }

          &--body-1--accessibility-item-2 {
            transform: translate(-12px, 92px);
          }

          &--body-1--accessibility-item-3 {
            transform: translate(0px, 79px);
          }

          &--body-1--accessibility-item-4 {
            transform: translate(98px, 137px);
          }

          &--body-1--accessibility-item-5 {
            transform: translate(-2px, 65px);
          }

          &--body-1--accessibility-item-6 {
            transform: translate(95px, 135px);
          }

          &--body-1--accessibility-item-7 {
            transform: translate(24px, 275px);
          }

          &--body-1--accessibility-item-8 {
            transform: translate(73px, 275px);
          }

          &--body-1--accessibility-item-9 {
            transform: translate(86px, 292px);
          }
        }

        &__soccer {
          &--body-1--soccer-1,
          &--body-1--soccer-2,
          &--body-1--soccer-3 {
            transform: translate(30px, 68px);
          }

          &--body-1--soccer-4 {
            transform: translate(55px, 70px);
          }

          &--soccer-1,
          &--soccer-2,
          &--soccer-3 {
            transform: translate(-27px, 6px);
          }

          &--soccer-4,
          &--soccer-5 {
            transform: translate(-3px, 50px);
          }

          &--soccer-6,
          &--soccer-7 {
            transform: translate(115px, 304px);
          }
        }

        &__hair {
          &--hair-1 {
            transform: translate(14px, -20px);
          }

          &--hair-10 {
            transform: translate(14px, -23px);
          }

          &--hair-11 {
            transform: translate(14px, -23px);
          }

          &--hair-12 {
            transform: translate(14px, -30px);
          }

          &--hair-13 {
            transform: translate(14px, -23px);
          }

          &--hair-14 {
            transform: translate(14px, -25px);
          }

          &--hair-15 {
            transform: translate(14px, -28px);
          }

          &--hair-16 {
            transform: translate(23px, -28px);
          }

          &--hair-2 {
            transform: translate(10px, -24px);
          }

          &--hair-3 {
            transform: translate(11px, -27px);
          }

          &--hair-4 {
            transform: translate(14px, -16px);
          }

          &--hair-5 {
            transform: translate(14px, -16px);
          }

          &--hair-6 {
            transform: translate(14px, -19px);
          }

          &--hair-7 {
            transform: translate(16px, -23px);
          }

          &--hair-8 {
            transform: translate(14px, -25px);
          }

          &--hair-9 {
            transform: translate(14px, -23px);
          }
        }

        &__beard {
          &--beard-1 {
            transform: translate(39px, 22px);
          }

          &--beard-2 {
            transform: translate(39px, 26px);
          }

          &--beard-3 {
            transform: translate(39px, 20px);
          }

          &--beard-4 {
            transform: translate(39px, 19px);
          }

          &--beard-5 {
            transform: translate(39px, 22px);
          }

          &--beard-6 {
            transform: translate(39px, 17px);
          }

          &--beard-7 {
            transform: translate(39px, 19px);
          }

          &--beard-8 {
            transform: translate(39px, 29px);
          }
        }
      }
    }

    .avatar-body__body-2 {
      &.avatar-item {
        &__coat {
          transform: translate(20px, 63px);

          &--body-2--coat-7,
          &--body-2--coat-8 {
            transform: translate(18px, 63px);
          }
        }

        &__dress {
          transform: translate(37px, 69px);

          &--body-2--dress-4,
          &--body-2--dress-8 {
            transform: translate(18px, 65px);
          }

          &--body-2--dress-5,
          &--body-2--dress-6,
          &--body-2--dress-7 {
            transform: translate(45px, 68px);
          }
        }

        &__face {
          transform: translate(48px, 12px);
        }

        &__glasses {
          transform: translate(43px, 17px);
        }

        &__necklace {
          transform: translate(46px, 68px);

          &--body-2--necklace-4 {
            transform: translate(55px, 68px);
          }

          &--body-2--necklace-5,
          &--body-2--necklace-6,
          &--body-2--necklace-7 {
            transform: translate(43px, 67px);
          }

          &--body-2--necklace-8 {
            transform: translate(56px, 68px);
          }
        }

        &__pant {
          transform: translate(45px, 155px);

          &--body-2--pant-8 {
            transform: translate(44px, 155px);
          }
        }

        &__shoe {
          transform: translate(35px, 221px);

          &--body-2--shoe-3 {
            transform: translate(35px, 225px);
          }

          &--body-2--shoe-4 {
            transform: translate(31px, 220px);
          }
          &--body-2--shoe-5 {
            transform: translate(31px, 216px);
          }

          &--body-2--shoe-7,
          &--body-2--shoe-8 {
            transform: translate(29px, 189px);
          }
        }

        &__tshirt {
          transform: translate(17px, 64px);

          &--body-2--tshirt-10,
          &--body-2--tshirt-11 {
            transform: translate(46px, 70px);
          }

          &--body-2--tshirt-3,
          &--body-2--tshirt-4,
          &--body-2--tshirt-5,
          &--body-2--tshirt-8 {
            transform: translate(39px, 68px);
          }
        }

        &__gedgets {
          &--gedgets-1 {
            transform: translate(-25px, 40px);
          }

          &--gedgets-2 {
            transform: translate(30px, 56px);
          }

          &--gedgets-3 {
            transform: translate(27px, 51px);
          }

          &--gedgets-4 {
            transform: translate(27px, 42px);
          }

          &--gedgets-5,
          &--gedgets-6,
          &--gedgets-7 {
            transform: translate(61px, 100px);
          }

          &--gedgets-8 {
            transform: translate(28px, 0px);
          }
        }

        &__headpiece {
          transform: translate(30px, -39px);

          &--headpiece-3 {
            transform: translate(48px, -48px);
          }

          &--headpiece-6 {
            transform: translate(30px, -10px);
          }

          &--headpiece-7 {
            transform: translate(30px, -4px);
          }

          &--headpiece-8 {
            transform: translate(30px, -60px);
          }

          &--headpiece-9 {
            transform: translate(30px, -50px);
          }
        }

        &__bag {
          &--body-2--bag-1 {
            transform: translate(21px, 68px);
          }

          &--body-2--bag-2 {
            transform: translate(35px, 70px);
          }

          &--body-2--bag-3 {
            transform: translate(15px, 72px);
          }

          &--body-2--bag-4 {
            transform: translate(-28px, 154px);
          }
        }

        &__accessibility-item {
          &--accessibility-item-1 {
            transform: translate(92px, 22px);
          }

          &--body-2--accessibility-item-1 {
            transform: translate(25px, 105px);
          }

          &--body-2--accessibility-item-2 {
            transform: translate(0, 110px);
          }

          &--body-2--accessibility-item-3 {
            transform: translate(3px, 106px);
          }

          &--body-2--accessibility-item-4 {
            transform: translate(96px, 107px);
          }

          &--body-2--accessibility-item-5 {
            transform: translate(29px, 190px);
          }

          &--body-2--accessibility-item-6 {
            transform: translate(71px, 190px);
          }

          &--body-2--accessibility-item-7 {
            transform: translate(0px, 98px);
          }

          &--body-2--accessibility-item-8 {
            transform: translate(89px, 102px);
          }
        }

        &__soccer {
          &--body-2--soccer-1,
          &--body-2--soccer-2,
          &--body-2--soccer-3 {
            transform: translate(36px, 66px);
          }

          &--body-2--soccer-4 {
            transform: translate(60px, 67px);
          }

          &--soccer-1,
          &--soccer-2,
          &--soccer-3 {
            transform: translate(-48px, 58px) rotate(335deg);
          }

          &--soccer-4,
          &--soccer-5 {
            transform: translate(0px, 73px);
          }

          &--soccer-6,
          &--soccer-7 {
            transform: translate(130px, 190px);
          }
        }
      }
    }

    .avatar-body__body-3 {
      &.avatar-item {
        &__coat {
          transform: translate(2px, 64px);
        }

        &__dress {
          transform: translate(29px, 70px);

          &--body-3--dress-4 {
            transform: translate(3px, 60px);
          }

          &--body-3--dress-5,
          &--body-3--dress-6,
          &--body-3--dress-7 {
            transform: translate(30px, 70px);
          }

          &--body-3--dress-8 {
            transform: translate(3px, 68px);
          }
        }

        &__face {
          // transform: translate(54px, 12px);
          transform: translate(54px, 12px);
        }

        &__glasses {
          transform: translate(49px, 12px);
        }

        &__necklace {
          transform: translate(53px, 68px);

          &--body-3--necklace-4,
          &--body-3--necklace-8 {
            transform: translate(61px, 68px);
          }

          &--body-3--necklace-5,
          &--body-3--necklace-6,
          &--body-3--necklace-7 {
            transform: translate(46px, 67px);
          }
        }

        &__pant {
          transform: translate(32px, 164px);

          &--body-3--pant-7,
          &--body-3--pant-8 {
            transform: translate(31px, 164px);
          }
        }

        &__shoe {
          transform: translate(30px, 333px);

          &--body-3--shoe-3 {
            transform: translate(30px, 335px);
          }

          &--body-3--shoe-4 {
            transform: translate(26px, 333px);
          }

          &--body-3--shoe-5 {
            transform: translate(21px, 330px);
          }

          &--body-3--shoe-7,
          &--body-3--shoe-8 {
            transform: translate(27px, 278px);
          }
        }

        &__tshirt {
          transform: translate(3px, 65px);

          &--body-3--tshirt-10,
          &--body-3--tshirt-9 {
            transform: translate(31px, 74px);
          }

          &--body-3--tshirt-2,
          &--body-3--tshirt-5 {
            transform: translate(29px, 65px);
          }

          &--body-3--tshirt-4,
          &--body-3--tshirt-6 {
            transform: translate(3px, 72px);
          }

          &--body-3--tshirt-7,
          &--body-3--tshirt-8 {
            transform: translate(28px, 70px);
          }
        }

        &__gedgets {
          &--gedgets-1 {
            transform: translate(-25px, 40px);
          }

          &--gedgets-2 {
            transform: translate(33px, 56px);
          }

          &--gedgets-3 {
            transform: translate(33px, 46px);
          }

          &--gedgets-4 {
            transform: translate(33px, 47px);
          }

          &--gedgets-5,
          &--gedgets-6,
          &--gedgets-7 {
            transform: translate(84px, 140px);
          }

          &--gedgets-8 {
            transform: translate(34px, 0px);
          }
        }

        &__headpiece {
          transform: translate(35px, -39px);

          &--headpiece-3 {
            transform: translate(52px, -50px);
          }

          &--headpiece-6 {
            transform: translate(36px, -12px);
          }

          &--headpiece-7 {
            transform: translate(36px, -4px);
          }

          &--headpiece-8 {
            transform: translate(36px, -60px);
          }

          &--headpiece-9 {
            transform: translate(36px, -50px);
          }
        }

        &__bag {
          &--body-3--bag-1 {
            transform: translate(19px, 71px);
          }

          &--body-3--bag-2 {
            transform: translate(22px, 72px);
          }

          &--body-3--bag-3 {
            transform: translate(15px, 72px);
          }

          &--body-3--bag-4 {
            transform: translate(-45px, 264px);
          }
        }

        &__accessibility-item {
          &--accessibility-item-1 {
            transform: translate(99px, 23px);
          }

          &--body-3--accessibility-item-1 {
            transform: translate(25px, 270px);
          }

          &--body-3--accessibility-item-2 {
            transform: translate(78px, 270px);
          }

          &--body-3--accessibility-item-3 {
            transform: translate(0px, 79px);
          }

          &--body-3--accessibility-item-4 {
            transform: translate(112px, 128px);
          }

          &--body-3--accessibility-item-5 {
            transform: translate(29px, 190px);
          }

          &--body-3--accessibility-item-6 {
            transform: translate(-2px, 62px);
          }

          &--body-3--accessibility-item-7 {
            transform: translate(106px, 120px);
          }

          &--body-3--accessibility-item-8 {
            transform: translate(-8px, 89px);
          }

          &--body-3--accessibility-item-9 {
            transform: translate(-14px, 108px);
          }
        }

        &__soccer {
          &--body-3--soccer-1,
          &--body-3--soccer-2,
          &--body-3--soccer-3 {
            transform: translate(28px, 68px);
          }

          &--body-3--soccer-4 {
            transform: translate(60px, 67px);
          }

          &--soccer-1,
          &--soccer-2,
          &--soccer-3 {
            transform: translate(-48px, 30px) rotate(335deg);
          }

          &--soccer-4,
          &--soccer-5 {
            transform: translate(0px, 52px);
          }

          &--soccer-6,
          &--soccer-7 {
            transform: translate(130px, 307px);
          }
        }

        &__hair {
          &--hair-1 {
            transform: translate(24px, -20px);
          }

          &--hair-10 {
            transform: translate(24px, -23px);
          }

          &--hair-11 {
            transform: translate(24px, -23px);
          }

          &--hair-12 {
            transform: translate(24px, -30px);
          }

          &--hair-13 {
            transform: translate(24px, -23px);
          }

          &--hair-14 {
            transform: translate(24px, -25px);
          }

          &--hair-15 {
            transform: translate(24px, -28px);
          }

          &--hair-16 {
            transform: translate(33px, -28px);
          }

          &--hair-2 {
            transform: translate(20px, -24px);
          }

          &--hair-3 {
            transform: translate(21px, -27px);
          }

          &--hair-4 {
            transform: translate(24px, -16px);
          }

          &--hair-5 {
            transform: translate(24px, -16px);
          }

          &--hair-6 {
            transform: translate(24px, -20px);
          }

          &--hair-7 {
            transform: translate(26px, -23px);
          }

          &--hair-8 {
            transform: translate(24px, -25px);
          }

          &--hair-9 {
            transform: translate(24px, -23px);
          }
        }

        &__beard {
          &--beard-1 {
            transform: translate(49px, 22px);
          }

          &--beard-2 {
            transform: translate(49px, 26px);
          }

          &--beard-3 {
            transform: translate(49px, 20px);
          }

          &--beard-4 {
            transform: translate(49px, 19px);
          }

          &--beard-5 {
            transform: translate(49px, 22px);
          }

          &--beard-6 {
            transform: translate(49px, 17px);
          }

          &--beard-7 {
            transform: translate(49px, 19px);
          }

          &--beard-8 {
            transform: translate(49px, 29px);
          }
        }
      }
    }

    .avatar-body__body-4 {
      &.avatar-item {
        &__coat {
          transform: translate(5px, 63px);

          &--body-4--coat-3 {
            transform: translate(2px, 64px);
          }

          &--body-4--coat-7 {
            transform: translate(4px, 64px);
          }

          &--body-4--coat-5,
          &--body-4--coat-6,
          &--body-4--coat-8 {
            transform: translate(4px, 65px);
          }
        }

        &__dress {
          transform: translate(30px, 71px);

          &--body-4--dress-4,
          &--body-4--dress-8 {
            transform: translate(4px, 67px);
          }

          &--body-4--dress-5,
          &--body-4--dress-6,
          &--body-4--dress-7 {
            transform: translate(31px, 71px);
          }
        }

        &__face {
          transform: translate(48px, 12px);
        }

        &__glasses {
          transform: translate(43px, 17px);
        }

        &__necklace {
          transform: translate(46px, 70px);

          &--body-4--necklace-4 {
            transform: translate(55px, 68px);
          }

          &--body-4--necklace-5,
          &--body-4--necklace-6,
          &--body-4--necklace-7 {
            transform: translate(43px, 70px);
          }

          &--body-4--necklace-8 {
            transform: translate(56px, 70px);
          }
        }

        &__pant {
          transform: translate(33px, 144px);

          &--body-4--pant-3,
          &--body-4--pant-6,
          &--body-4--pant-7,
          &--body-4--pant-8 {
            transform: translate(30px, 145px);
          }
        }

        &__shoe {
          transform: translate(28px, 221px);

          &--body-4--shoe-3 {
            transform: translate(28px, 225px);
          }

          &--body-4--shoe-4 {
            transform: translate(20px, 220px);
          }

          &--body-4--shoe-5 {
            transform: translate(20px, 217px);
          }

          &--body-4--shoe-7,
          &--body-4--shoe-8 {
            transform: translate(28px, 188px);
          }
        }

        &__tshirt {
          transform: translate(5px, 66px);

          &--body-4--tshirt-10,
          &--body-4--tshirt-9 {
            transform: translate(33px, 72px);
          }

          &--body-4--tshirt-3,
          &--body-4--tshirt-5 {
            transform: translate(31px, 68px);
          }

          &--body-4--tshirt-4 {
            transform: translate(5px, 69px);
          }

          &--body-4--tshirt-7 {
            transform: translate(31px, 72px);
          }

          &--body-4--tshirt-8 {
            transform: translate(31px, 68px);
          }
        }

        &__gedgets {
          &--gedgets-1 {
            transform: translate(-25px, 40px);
          }

          &--gedgets-2 {
            transform: translate(30px, 56px);
          }

          &--gedgets-3 {
            transform: translate(27px, 51px);
          }

          &--gedgets-4 {
            transform: translate(27px, 42px);
          }

          &--gedgets-5,
          &--gedgets-6,
          &--gedgets-7 {
            transform: translate(68px, 104px);
          }

          &--gedgets-8 {
            transform: translate(28px, 0px);
          }
        }

        &__headpiece {
          transform: translate(30px, -39px);

          &--headpiece-3 {
            transform: translate(48px, -48px);
          }

          &--headpiece-6 {
            transform: translate(30px, -10px);
          }

          &--headpiece-7 {
            transform: translate(30px, -4px);
          }

          &--headpiece-8 {
            transform: translate(30px, -60px);
          }

          &--headpiece-9 {
            transform: translate(30px, -50px);
          }
        }

        &__bag {
          &--body-4--bag-1 {
            transform: translate(13px, 72px);
          }

          &--body-4--bag-2 {
            transform: translate(17px, 72px);
          }

          &--body-4--bag-3 {
            transform: translate(23px, 74px);
          }

          &--body-4--bag-4 {
            transform: translate(-48px, 154px);
          }
        }

        &__accessibility-item {
          &--accessibility-item-1 {
            transform: translate(92px, 22px);
          }

          &--body-4--accessibility-item-1 {
            transform: translate(25px, 194px);
          }

          &--body-4--accessibility-item-2 {
            transform: translate(74px, 194px);
          }

          &--body-4--accessibility-item-3 {
            transform: translate(0px, 100px);
          }

          &--body-4--accessibility-item-4 {
            transform: translate(104px, 118px);
          }

          &--body-4--accessibility-item-5 {
            transform: translate(-2px, 78px);
          }

          &--body-4--accessibility-item-6 {
            transform: translate(99px, 103px);
          }

          &--body-4--accessibility-item-7 {
            transform: translate(30px, 98px);
          }

          &--body-4--accessibility-item-8 {
            transform: translate(-10px, 102px);
          }
        }

        &__soccer {
          &--body-4--soccer-1,
          &--body-4--soccer-2,
          &--body-4--soccer-3 {
            transform: translate(30px, 67px);
          }

          &--body-4--soccer-4 {
            transform: translate(54px, 67px);
          }

          &--soccer-1,
          &--soccer-2,
          &--soccer-3 {
            transform: translate(-48px, 45px) rotate(335deg);
          }

          &--soccer-4,
          &--soccer-5 {
            transform: translate(0px, 73px);
          }

          &--soccer-6,
          &--soccer-7 {
            transform: translate(130px, 190px);
          }
        }
      }
    }

    .avatar-body__body-5 {
      &.avatar-item {
        &__coat {
          transform: translate(2px, 64px);
        }

        &__dress {
          transform: translate(48px, 72px);

          &--body-5--dress-4 {
            transform: translate(3px, 60px);
          }

          &--body-5--dress-4,
          &--body-5--dress-5,
          &--body-5--dress-6 {
            transform: translate(58px, 73px);
          }

          &--body-5--dress-7,
          &--body-5--dress-8 {
            transform: translate(14px, 69px);
          }
        }

        &__face {
          transform: translate(58px, 12px);
        }

        &__glasses {
          transform: translate(53px, 17px);
        }

        &__necklace {
          transform: translate(53px, 68px);

          &--body-5--necklace-4,
          &--body-5--necklace-8 {
            transform: translate(61px, 68px);
          }

          &--body-5--necklace-5,
          &--body-5--necklace-6,
          &--body-5--necklace-7 {
            transform: translate(46px, 67px);
          }
        }

        &__pant {
          transform: translate(56px, 164px);

          &--body-5--pant-7,
          &--body-5--pant-8 {
            transform: translate(55px, 164px);
          }
        }

        &__shoe {
          transform: translate(77px, 277px);

          &--body-5--shoe-4 {
            transform: translate(75px, 277px);
          }

          &--body-5--shoe-5 {
            transform: translate(74px, 272px);
          }

          &--body-5--shoe-7,
          &--body-5--shoe-8 {
            transform: translate(70px, 219px);
          }
        }

        &__tshirt {
          transform: translate(18px, 67px);

          &--body-5--tshirt-10,
          &--body-5--tshirt-9 {
            transform: translate(57px, 73px);
          }

          &--body-5--tshirt-2 {
            transform: translate(17px, 65px);
          }

          &--body-5--tshirt-3 {
            transform: translate(48px, 67px);
          }

          &--body-5--tshirt-4,
          &--body-5--tshirt-6 {
            transform: translate(46px, 72px);
          }

          &--body-5--tshirt-5 {
            transform: translate(48px, 70px);
          }

          &--body-5--tshirt-7,
          &--body-5--tshirt-8 {
            transform: translate(16px, 72px);
          }
        }

        &__gedgets {
          &--gedgets-1 {
            transform: translate(-20px, 30px);
          }

          &--gedgets-2 {
            transform: translate(39px, 56px);
          }

          &--gedgets-3 {
            transform: translate(37px, 57px);
          }

          &--gedgets-4 {
            transform: translate(37px, 45px);
          }

          &--gedgets-5,
          &--gedgets-6,
          &--gedgets-7 {
            transform: translate(83px, 140px);
          }

          &--gedgets-8 {
            transform: translate(38px, 0px);
          }
        }

        &__headpiece {
          transform: translate(40px, -39px);

          &--headpiece-3 {
            transform: translate(59px, -50px);
          }

          &--headpiece-6 {
            transform: translate(40px, -12px);
          }

          &--headpiece-7 {
            transform: translate(40px, -4px);
          }

          &--headpiece-8 {
            transform: translate(40px, -60px);
          }

          &--headpiece-9 {
            transform: translate(40px, -50px);
          }
        }

        &__bag {
          &--body-5--bag-1 {
            transform: translate(67px, 72px);
          }

          &--body-5--bag-2 {
            transform: translate(64px, 72px);
          }

          &--body-5--bag-3 {
            transform: translate(85px, 73px);
          }

          &--body-5--bag-4 {
            transform: translate(-55px, 229px);
          }
        }

        &__accessibility-item {
          &--accessibility-item-1 {
            transform: translate(102px, 23px);
          }

          &--body-5--accessibility-item-1 {
            transform: translate(14px, 82px);
          }

          &--body-5--accessibility-item-2 {
            transform: translate(113px, 139px);
          }

          &--body-5--accessibility-item-3,
          &--body-5--accessibility-item-4 {
            transform: translate(74px, 219px);
          }

          &--body-5--accessibility-item-5 {
            transform: translate(13px, 64px);
          }

          &--body-5--accessibility-item-6 {
            transform: translate(109px, 135px);
          }
        }

        &__soccer {
          &--body-5--soccer-1,
          &--body-5--soccer-2,
          &--body-5--soccer-3 {
            transform: translate(45px, 66px);
          }

          &--body-5--soccer-4 {
            transform: translate(70px, 67px);
          }

          &--soccer-1,
          &--soccer-2,
          &--soccer-3 {
            transform: translate(-40px, 25px) rotate(335deg);
          }

          &--soccer-4,
          &--soccer-5 {
            transform: translate(10px, 52px);
          }

          &--soccer-6,
          &--soccer-7 {
            transform: translate(147px, 266px);
          }
        }
      }
    }
  }
}
</style>
