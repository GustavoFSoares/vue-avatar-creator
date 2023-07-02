import {
  type AccessibilityItemShape,
  type BagShape,
  type BeardShape,
  type BodyShape,
  type CoatShape,
  type DressShape,
  type FaceShape,
  type GedgetsShape,
  type GlassShape,
  type HeadpieceShape,
  type MustacheShape,
  type NecklaceShape,
  type PantShape,
  type ShoeShape,
  type SoccerShape,
  type TshirtShape,
} from '../enums';

export interface IWidget<Shape> {
  shape: Shape;
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
  gedgets: IWidget<GedgetsShape>;
  glass: IWidget<GlassShape>;
  headpiece: IWidget<HeadpieceShape>;
  mustache: IWidget<MustacheShape>;
  necklace: IWidget<NecklaceShape>;
  pant: IWidget<PantShape>;
  shoe: IWidget<ShoeShape>;
  soccer: IWidget<SoccerShape>;
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
//   glass: GlassShape
//   headpiece: HeadpieceShape
//   mustache: MustacheShape
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
  glass: string[];
  headpiece: string[];
  mustache: string[];
  necklace: string[];
  pant: string[];
  shoe: string[];
  soccer: string[];
  tshirt: string[];
};
