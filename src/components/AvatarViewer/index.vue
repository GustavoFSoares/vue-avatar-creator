<template>
  <div class="avatar-preview" v-html="svgContent" />
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useAvatarStore } from '@/stores/avatar.ts';

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
    .filter(
      (avatarItem) => buildOrder.includes(avatarItem.type) && avatarItem.shape
    )
    .sort((a, b) => buildOrder.indexOf(a.type) - buildOrder.indexOf(b.type));

  const shapesPromises = preparedBuildOrder.map(({ shape, type }) => {
    const svgContent = import(
      `/src/assets/widget-options/${type}/${shape}.svg?raw`
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
    .avatar-body__body-1 {
      &.avatar-item {
        &__coat {
          transform: translate(7px, 77px);
        }

        &__dress {
          transform: translate(7px, 88px);
        }

        &__face {
          transform: translate(58px, 27px);
        }

        &__glasses {
          transform: translate(52px, 32px);
        }

        &__necklace {
          transform: translate(55px, 85px);
        }

        &__pant {
          transform: translate(42px, 175px);
        }

        &__shoe {
          transform: translate(22px, 287px);
        }

        &__tshirt {
          transform: translate(11px, 74px);
        }

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
            transform: translate(-15px, 27px);
          }

          &--soccer-4,
          &--soccer-5 {
            transform: translate(13px, 60px);
          }

          &--soccer-6,
          &--soccer-7 {
            transform: translate(130px, 320px);
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
          transform: translate(54px, 12px);
        }

        &__glasses {
          transform: translate(49px, 17px);
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
      }
    }
  }
}
</style>
