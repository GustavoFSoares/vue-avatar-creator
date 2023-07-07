import { defineStore } from 'pinia';

import type { AvatarWidgets, IWidget } from '@/types';
import type { WidgetType } from '@/enums';
import { COLOR_OPTIONS } from '@/utils/constant';

export const useCartStore = defineStore({
  id: 'avatar',
  state: () => ({
    avatarConfiguration: {} as AvatarWidgets,
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
    },
  },
});
