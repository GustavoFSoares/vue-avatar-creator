import { defineStore } from 'pinia';

import type { AvatarWidgets, IWidget } from '@/types';
import type { GedgetsShape, SoccerShape } from '@/enums';
import { type WidgetType } from '@/enums';
import { COLOR_OPTIONS } from '@/utils/constant';

export const useAvatarStore = defineStore({
  id: 'avatar',
  state: () => ({
    avatarConfiguration: {
      'accessibility-item': null,
      bag: null,
      beard: null,
      body: {
        shape: 'item-A',
        fillColor: '#000',
      },
      coat: null,
      dress: null,
      face: null,
      gedgets: [
        {
          shape: 'item-A',
          fillColor: '#000',
        },
        {
          shape: 'item-B',
          fillColor: '#000',
        },
      ] as IWidget<GedgetsShape>[],
      glasses: null,
      headpiece: null,
      hair: null,
      necklace: null,
      pant: null,
      shoe: null,
      soccer: [] as IWidget<SoccerShape>[],
      tshirt: null,
    } as AvatarWidgets,
  }),
  getters: {
    // items: (state): Array<{ name: string; amount: number }> =>
    //   state.rawItems.reduce((items, item) => {
    //     const existingItem = items.find((it) => it.name === item);
    //     if (!existingItem) {
    //       items.push({ name: item, amount: 1 });
    //     } else {
    //       existingItem.amount++;
    //     }
    //     return items;
    //   }, [] as Array<{ name: string; amount: number }>),
  },
  actions: {
    addWidget(item: WidgetType, shape: string) {
      if (this.avatarConfiguration[item] === undefined) {
        throw new Error(`Error trying add item "${item}"`);
      }

      const [firstColor] = COLOR_OPTIONS;

      const widgetData: IWidget<string> = {
        shape,
        fillColor: firstColor,
      };

      if (item === 'soccer' || item === 'gedgets') {
        this.avatarConfiguration[item].push(widgetData);
      }

      if (item !== 'soccer' && item !== 'gedgets') {
        this.avatarConfiguration[item] = widgetData;
      }

      console.log(this.avatarConfiguration);
    },
    removeWidget(item: WidgetType, shape: string) {
      if (!this.avatarConfiguration[item]) {
        throw new Error(`Error trying remove item "${item}"`);
      }

      if (item === 'soccer' || item === 'gedgets') {
        const avatarItemIndex = this.avatarConfiguration[item].findIndex(
          (avatarItem) => avatarItem.shape === shape
        );

        if (avatarItemIndex !== -1) {
          this.avatarConfiguration[item].splice(avatarItemIndex, 1);
        }
      }

      if (item !== 'soccer' && item !== 'gedgets') {
        this.avatarConfiguration[item] = null;
      }

      console.log(this.avatarConfiguration);
    },
    selectWidgetColor(item: WidgetType, color: string) {
      if (!this.avatarConfiguration[item]) {
        throw new Error(`Error trying find item "${item}"`);
      }

      if (item === 'soccer' || item === 'gedgets') {
        const widgetItem = this.avatarConfiguration[item].find(
          (widgetItem) => widgetItem.shape === item
        );

        if (widgetItem) {
          widgetItem.fillColor = color;
        }
      }

      if (item !== 'soccer' && item !== 'gedgets') {
        const currentWidget = this.avatarConfiguration[item];
        if (currentWidget) {
          currentWidget.fillColor = color;
        }
      }

      console.log(this.avatarConfiguration[item]);
    },
  },
});
