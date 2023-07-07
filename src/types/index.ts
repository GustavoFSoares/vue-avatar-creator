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
  'accessibility-item': IWidget<AccessibilityItemShape>;
  bag: IWidget<BagShape>;
  beard: IWidget<BeardShape>;
  body: IWidget<BodyShape>;
  coat: IWidget<CoatShape>;
  dress: IWidget<DressShape>;
  face: IWidget<FaceShape>;
  gedgets: IWidget<GedgetsShape>[];
  glasses: IWidget<GlassesShape>;
  headpiece: IWidget<HeadpieceShape>;
  hair: IWidget<HairShape>;
  necklace: IWidget<NecklaceShape>;
  pant: IWidget<PantShape>;
  shoe: IWidget<ShoeShape>;
  soccer: IWidget<SoccerShape>[];
  tshirt: IWidget<TshirtShape>;
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
