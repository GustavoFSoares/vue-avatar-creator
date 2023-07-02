import type { AvatarOptions } from '../types';
import {
  AccessibilityItemShape,
  BagShape,
  BeardShape,
  BodyShape,
  CoatShape,
  DressShape,
  FaceShape,
  GedgetsShape,
  GlassShape,
  HeadpieceShape,
  MustacheShape,
  NecklaceShape,
  PantShape,
  ShoeShape,
  SoccerShape,
  TshirtShape,
  WidgetType,
} from '../enums';
// import type { AvatarOption, AvatarSettings } from '../types'

export const AVATAR_LAYER: Readonly<{
  [key in `${WidgetType}`]: { zIndex: number };
}> = {
  [WidgetType.AccessibilityItemShape]: {
    zIndex: 0,
  },
  [WidgetType.BagShape]: {
    zIndex: 0,
  },
  [WidgetType.BeardShape]: {
    zIndex: 0,
  },
  [WidgetType.BodyShape]: {
    zIndex: 0,
  },
  [WidgetType.CoatShape]: {
    zIndex: 0,
  },
  [WidgetType.DressShape]: {
    zIndex: 0,
  },
  [WidgetType.FaceShape]: {
    zIndex: 0,
  },
  [WidgetType.GedgetsShape]: {
    zIndex: 0,
  },
  [WidgetType.GlassShape]: {
    zIndex: 0,
  },
  [WidgetType.HeadpieceShape]: {
    zIndex: 0,
  },
  [WidgetType.MustacheShape]: {
    zIndex: 0,
  },
  [WidgetType.NecklaceShape]: {
    zIndex: 0,
  },
  [WidgetType.PantShape]: {
    zIndex: 0,
  },
  [WidgetType.ShoeShape]: {
    zIndex: 0,
  },
  [WidgetType.SoccerShape]: {
    zIndex: 0,
  },
  [WidgetType.TshirtShape]: {
    zIndex: 0,
  },
};

export const AVATAR_WIDGETS: Readonly<WidgetType[]> = [
  WidgetType.AccessibilityItemShape,
  WidgetType.BagShape,
  WidgetType.BeardShape,
  WidgetType.BodyShape,
  WidgetType.CoatShape,
  WidgetType.DressShape,
  WidgetType.FaceShape,
  WidgetType.GedgetsShape,
  WidgetType.GlassShape,
  WidgetType.HeadpieceShape,
  WidgetType.MustacheShape,
  WidgetType.NecklaceShape,
  WidgetType.PantShape,
  WidgetType.ShoeShape,
  WidgetType.SoccerShape,
  WidgetType.TshirtShape,
];

console.log(AccessibilityItemShape);

export const AVATAR_OPTIONS: Readonly<AvatarOptions> = {
  [WidgetType.AccessibilityItemShape]: Object.values(AccessibilityItemShape),
  [WidgetType.BagShape]: Object.values(BagShape),
  [WidgetType.BeardShape]: Object.values(BeardShape),
  [WidgetType.BodyShape]: Object.values(BodyShape),
  [WidgetType.CoatShape]: Object.values(CoatShape),
  [WidgetType.DressShape]: Object.values(DressShape),
  [WidgetType.FaceShape]: Object.values(FaceShape),
  [WidgetType.GedgetsShape]: Object.values(GedgetsShape),
  [WidgetType.GlassShape]: Object.values(GlassShape),
  [WidgetType.HeadpieceShape]: Object.values(HeadpieceShape),
  [WidgetType.MustacheShape]: Object.values(MustacheShape),
  [WidgetType.NecklaceShape]: Object.values(NecklaceShape),
  [WidgetType.PantShape]: Object.values(PantShape),
  [WidgetType.ShoeShape]: Object.values(ShoeShape),
  [WidgetType.SoccerShape]: Object.values(SoccerShape),
  [WidgetType.TshirtShape]: Object.values(TshirtShape),
};

// export const getAvatarFace = async (
//   title: string,
//   color: string,
//   type: 'widgets' | 'preview'
// ): Promise<any> => {
//   let faceBuilder

//   if (type === 'widgets') {
//     const faceBuilderFile: any = await import(`@/assets/widgets/face/base`)

//     faceBuilder = faceBuilderFile.default
//   } else if (type === 'preview') {
//     const faceBuilderFile: any = await import(`@/assets/preview/face/base`)

//     faceBuilder = faceBuilderFile.default
//   }

//   return {
//     default: faceBuilder({ title, color }),
//   }
// }

export const SCREEN = {
  lg: 976,
} as const;

export const NONE = 'none';

export const TRIGGER_PROBABILITY = 0.1;

// export const SPECIAL_AVATARS: Readonly<AvatarOption[]> = [
//   {
//     wrapperShape: 'squircle',
//     background: {
//       color: 'linear-gradient(62deg, #8EC5FC, #E0C3FC)',
//     },
//     widgets: {
//       face: {
//         shape: FaceShape.Base,
//       },
//       tops: {
//         shape: TopsShape.Pixie,
//         fillColor: '#d2eff3',
//       },
//       ear: {
//         shape: EarShape.Attached,
//       },
//       earrings: {
//         shape: EarringsShape.Stud,
//       },
//       eyebrows: {
//         shape: EyebrowsShape.Up,
//       },
//       eyes: {
//         shape: EyesShape.Eyeshadow,
//       },
//       nose: {
//         shape: NoseShape.Pointed,
//       },
//       glasses: {
//         shape: NONE,
//       },
//       mouth: {
//         shape: MouthShape.Laughing,
//       },
//       beard: {
//         shape: NONE,
//       },
//       clothes: {
//         shape: ClothesShape.Crew,
//         fillColor: '#e0ddff',
//       },
//     },
//   },
//   {
//     wrapperShape: 'squircle',
//     background: {
//       color: '#fd6f5d',
//     },
//     widgets: {
//       face: {
//         shape: FaceShape.Base,
//       },
//       tops: {
//         shape: TopsShape.Clean,
//       },
//       ear: {
//         shape: EarShape.Attached,
//       },
//       earrings: {
//         shape: NONE,
//       },
//       eyebrows: {
//         shape: EyebrowsShape.Eyelashesdown,
//       },
//       eyes: {
//         shape: EyesShape.Round,
//       },
//       nose: {
//         shape: NoseShape.Round,
//       },
//       glasses: {
//         shape: NONE,
//       },
//       mouth: {
//         shape: MouthShape.Surprised,
//       },
//       beard: {
//         shape: NONE,
//       },
//       clothes: {
//         shape: ClothesShape.Crew,
//         fillColor: '#f4d150',
//       },
//     },
//   },
// ]

export const NOT_COMPATIBLE_AGENTS = [
  'quark',
  'micromessenger',
  'weibo',
  'douban',
] as const;

export const DOWNLOAD_DELAY = 800;
