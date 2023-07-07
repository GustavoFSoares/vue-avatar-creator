import { defineStore } from 'pinia';

import type { AvatarWidgets, IWidget } from '@/types';
import type { GedgetsShape, SoccerShape } from '@/enums';
import { type WidgetType } from '@/enums';
import { COLOR_OPTIONS } from '@/utils/constant';

export const useAvatarStore = defineStore({
  id: 'avatar',
  state: () => ({
    avatarConfiguration: {
      'accessibility-item': {},
      bag: {},
      beard: {},
      body: {},
      coat: {},
      dress: {},
      face: {},
      gedgets: [] as IWidget<GedgetsShape>[],
      glasses: {},
      headpiece: {},
      hair: {},
      necklace: {},
      pant: {},
      shoe: {},
      soccer: [] as IWidget<SoccerShape>[],
      tshirt: {},
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
      if (!this.avatarConfiguration[item]) {
        throw new Error(`Error trying find item "${item}"`);
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
        this.avatarConfiguration[item].fillColor = color;
      }

      console.log(this.avatarConfiguration[item]);
    },
  },
});
