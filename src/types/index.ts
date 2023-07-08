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

export interface IWidget<Shape> {
  shape: Shape | string;
  zIndex?: number;
  fillColor: string;
  strokeColor?: string;
}

export type AvatarWidgets = {
  'accessibility-item': IWidget<AccessibilityItemShape> | null;
  bag: IWidget<BagShape> | null;
  beard: IWidget<BeardShape> | null;
  body: IWidget<BodyShape> | null;
  coat: IWidget<CoatShape> | null;
  dress: IWidget<DressShape> | null;
  face: IWidget<FaceShape> | null;
  gedgets: IWidget<GedgetsShape>[];
  glasses: IWidget<GlassesShape> | null;
  headpiece: IWidget<HeadpieceShape> | null;
  hair: IWidget<HairShape> | null;
  necklace: IWidget<NecklaceShape> | null;
  pant: IWidget<PantShape> | null;
  shoe: IWidget<ShoeShape> | null;
  soccer: IWidget<SoccerShape>[];
  tshirt: IWidget<TshirtShape> | null;
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
