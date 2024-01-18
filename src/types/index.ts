import type { COLOR_OPTIONS } from '@/utils/constant';
import type { WidgetType } from '../enums';
import {
  type AccessibilityItemShape,
  type BagShape,
  type BeardShape,
  type BodyShape,
  type CoatShape,
  type DressShape,
  type FaceShape,
  type GedgetsShape,
  type GlassesShape,
  type HeadpieceShape,
  type HairShape,
  type NecklaceShape,
  type PantShape,
  type ShoeShape,
  type SoccerShape,
  type TshirtShape,
} from '../enums';

export type AvailableColors = typeof COLOR_OPTIONS;

export interface IWidget<Shape> {
  shape: Shape | string;
  zIndex?: number;
  fillColor: AvailableColors;
  strokeColor?: string;
}

export type AvatarWidgets = {
  'accessibility-item': IWidget<typeof AccessibilityItemShape> | null;
  bag: IWidget<typeof BagShape> | null;
  beard: IWidget<typeof BeardShape> | null;
  body: IWidget<typeof BodyShape> | null;
  coat: IWidget<typeof CoatShape> | null;
  dress: IWidget<typeof DressShape> | null;
  face: IWidget<typeof FaceShape> | null;
  gedgets: IWidget<typeof GedgetsShape>[];
  glasses: IWidget<typeof GlassesShape> | null;
  headpiece: IWidget<typeof HeadpieceShape> | null;
  hair: IWidget<typeof HairShape> | null;
  necklace: IWidget<typeof NecklaceShape> | null;
  pant: IWidget<typeof PantShape> | null;
  shoe: IWidget<typeof ShoeShape> | null;
  soccer: IWidget<typeof SoccerShape>[];
  tshirt: IWidget<typeof TshirtShape> | null;
};

// export type AvatarOptions = {
//   'accessibility-item': AccessibilityItemShape
//   bag: BagShape
//   beard: BeardShape
//   body: BodyShape
//   coat: CoatShape
//   dress: DressShape
//   face: FaceShape
//   gedgets: GedgetsShape
//   glasses: GlassesShape
//   headpiece: HeadpieceShape
//   hair: HairShape
//   necklace: NecklaceShape
//   pant: PantShape
//   shoe: ShoeShape
//   soccer: SoccerShape
//   tshirt: TshirtShape
// }

export type AvatarOptions = {
  'accessibility-item': string[];
  bag: string[];
  beard: string[];
  body: string[];
  coat: string[];
  dress: string[];
  face: string[];
  gedgets: string[];
  glasses: string[];
  headpiece: string[];
  hair: string[];
  necklace: string[];
  pant: string[];
  shoe: string[];
  soccer: string[];
  tshirt: string[];
};

export type IWidgetOption = {
  item: string;
  selected: boolean;
  widgetType: WidgetType;
  color: AvailableColors;
};
