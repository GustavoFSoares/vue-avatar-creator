import { defineStore } from 'pinia';

import type { AvatarWidgets, IWidget } from '@/types';
import type { GedgetsShape, SoccerShape } from '@/enums';
import { type WidgetType } from '@/enums';
import { COLOR_OPTIONS } from '@/utils/constant';

export const useAvatarStore = defineStore({
  id: 'avatar',
  state: () => ({
    avatarConfiguration: {
      'accessibility-item': {
        shape: 'body-1--accessibility-item-2',
        fillColor: '#0E202D',
      },
      bag: { shape: 'body-1--bag-2', fillColor: '#0E202D' },
      beard: { shape: 'beard-2', fillColor: '#0E202D' },
      body: { shape: 'body-1', fillColor: '#0E202D' },
      coat: { shape: 'body-1--coat-2', fillColor: '#0E202D' },
      dress: { shape: 'body-1--dress-3', fillColor: '#0E202D' },
      face: { shape: 'face-2', fillColor: '#0E202D' },
      gedgets: [{ shape: 'gedgets-2', fillColor: '#0E202D' }] as IWidget<
        typeof GedgetsShape
      >[],
      glasses: { shape: 'glasses-2', fillColor: '#0E202D' },
      headpiece: { shape: 'headpiece-8', fillColor: '#0E202D' },
      hair: { shape: 'hair-10', fillColor: '#0E202D' },
      necklace: { shape: 'body-1--necklace-3', fillColor: '#0E202D' },
      pant: { shape: 'body-1--pant-3', fillColor: '#0E202D' },
      shoe: { shape: 'body-1--shoe-1', fillColor: '#0E202D' },
      soccer: [{ shape: 'body-1--soccer-2', fillColor: '#0E202D' }] as IWidget<
        typeof SoccerShape
      >[],
      tshirt: { shape: 'body-1--tshirt-10', fillColor: '#0E202D' },
    } as AvatarWidgets,
  }),
  getters: {
    bodyShape(state): string {
      const { body } = state.avatarConfiguration;

      if (!body) {
        throw new Error('Body not found');
      }

      return body.shape;
    },
    items(state): AvatarWidgets {
      return state.avatarConfiguration;
    },
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
