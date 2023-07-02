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
} from '../enums'

export interface IWidget<Shape> {
  shape: Shape
  zIndex?: number
  fillColor: string
  strokeColor?: string
}

export type AvatarWidgets = {
  'accessibility-item': IWidget<AccessibilityItemShape>
  bag: IWidget<BagShape>
  beard: IWidget<BeardShape>
  body: IWidget<BodyShape>
  coat: IWidget<CoatShape>
  dress: IWidget<DressShape>
  face: IWidget<FaceShape>
  gedgets: IWidget<GedgetsShape>
  glass: IWidget<GlassShape>
  headpiece: IWidget<HeadpieceShape>
  mustache: IWidget<MustacheShape>
  necklace: IWidget<NecklaceShape>
  pant: IWidget<PantShape>
  shoe: IWidget<ShoeShape>
  soccer: IWidget<SoccerShape>
  tshirt: IWidget<TshirtShape>
}
