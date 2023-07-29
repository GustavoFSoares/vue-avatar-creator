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
      body: { shape: 'body-2', fillColor: '#0E202D' },
      coat: null,
      dress: null,
      face: null,
      gedgets: [] as IWidget<typeof GedgetsShape>[],
      glasses: null,
      headpiece: null,
      hair: null,
      necklace: null,
      pant: null,
      shoe: null,
      soccer: [] as IWidget<typeof SoccerShape>[],
      tshirt: null,
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
    items(state) {
      const itemsKeys: any[] = Object.keys(state.avatarConfiguration);

      return itemsKeys.reduce((amount, itemKey) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const item = state.avatarConfiguration[itemKey];
        if (item === undefined || !item) {
          return amount;
        }

        if (Array.isArray(item)) {
          const mappedItem = item.map((currentItem) => ({
            ...currentItem,
            type: itemKey,
          }));

          amount = [...amount, ...mappedItem];
        } else {
          amount.push({
            ...item,
            type: itemKey,
          });
        }

        return amount;
      }, []);
    },
  },
  actions: {
    clearSelections() {
      Object.keys(this.avatarConfiguration).forEach((itemKey) => {
        if (itemKey === 'body') {
          return;
        }

        if (['soccer', 'gedgets'].includes(itemKey)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          this.avatarConfiguration[itemKey] = [];

          return;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.avatarConfiguration[itemKey] = null;
      });

      console.log(this.avatarConfiguration);
    },
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

      if (item === 'body') {
        this.clearSelections();
      }

      // console.log(this.avatarConfiguration);
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

      // console.log(this.avatarConfiguration);
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

      // console.log(this.avatarConfiguration[item]);
    },
  },
});
