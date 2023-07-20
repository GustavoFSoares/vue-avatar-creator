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
  GlassesShape,
  HeadpieceShape,
  HairShape,
  NecklaceShape,
  PantShape,
  ShoeShape,
  SoccerShape,
  TshirtShape,
  WidgetType,
} from '../enums';
// import type { AvatarOption, AvatarSettings } from '../types'

interface AvatarSpecification {
  zIndex: number;
  allowMultiple: boolean;
  byBody: boolean;
  cantRemove?: boolean;
  x?: number;
  y?: number;
}

export const AVATAR_SPECIFICATION: Readonly<{
  [key in `${WidgetType}`]: AvatarSpecification;
}> = {
  [WidgetType.AccessibilityItemShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
  },
  [WidgetType.BagShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
  },
  [WidgetType.BeardShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: false,
  },
  [WidgetType.BodyShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: false,
    cantRemove: true,
  },
  [WidgetType.CoatShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
  },
  [WidgetType.DressShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
  },
  [WidgetType.FaceShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: false,
    x: 60,
    y: 20,
  },
  [WidgetType.GedgetsShape]: {
    zIndex: 0,
    allowMultiple: true,
    byBody: false,
  },
  [WidgetType.GlassesShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: false,
  },
  [WidgetType.HeadpieceShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: false,
  },
  [WidgetType.HairShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: false,
    x: 48,
    y: -8,
  },
  [WidgetType.NecklaceShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
  },
  [WidgetType.PantShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
    x: 42,
    y: 175,
  },
  [WidgetType.ShoeShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
    x: 22,
    y: 287,
  },
  [WidgetType.SoccerShape]: {
    zIndex: 0,
    allowMultiple: true,
    byBody: true,
  },
  [WidgetType.TshirtShape]: {
    zIndex: 0,
    allowMultiple: false,
    byBody: true,
    x: 3,
    y: 65,
  },
};

export const AVATAR_WIDGETS: Readonly<WidgetType[]> = [
  WidgetType.SoccerShape,
  WidgetType.GedgetsShape,
  WidgetType.BeardShape,
  WidgetType.HairShape,
  WidgetType.CoatShape,
  WidgetType.BodyShape,
  WidgetType.HeadpieceShape,
  WidgetType.FaceShape,
  WidgetType.BagShape,
  WidgetType.NecklaceShape,
  WidgetType.GlassesShape,
  WidgetType.DressShape,
  WidgetType.TshirtShape,
  WidgetType.ShoeShape,
  WidgetType.PantShape,
  WidgetType.AccessibilityItemShape,
];

export const AVATAR_OPTIONS: Readonly<AvatarOptions> = {
  [WidgetType.AccessibilityItemShape]: Object.values(AccessibilityItemShape),
  [WidgetType.BagShape]: Object.values(BagShape),
  [WidgetType.BeardShape]: Object.values(BeardShape),
  [WidgetType.BodyShape]: Object.values(BodyShape),
  [WidgetType.CoatShape]: Object.values(CoatShape),
  [WidgetType.DressShape]: Object.values(DressShape),
  [WidgetType.FaceShape]: Object.values(FaceShape),
  [WidgetType.GedgetsShape]: Object.values(GedgetsShape),
  [WidgetType.GlassesShape]: Object.values(GlassesShape),
  [WidgetType.HeadpieceShape]: Object.values(HeadpieceShape),
  [WidgetType.HairShape]: Object.values(HairShape),
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

export const COLOR_OPTIONS = [
  '#0E202D',
  '#FFFFFF',
  '#CD95D6',
  '#B96BC6',
  '#9B2FAE',
  '#692398',
  '#9FA9D8',
  '#7A88C9',
  '#4054B2',
  '#293891',
  '#84D4F8',
  '#55C4F5',
  '#1DAAF1',
  '#1278BB',
  '#83CBC4',
  '#52B6AC',
  '#159588',
  '#0B695C',
  '#A6D5A9',
  '#83C686',
  '#50AE54',
  '#317C36',
  '#FFF4A2',
  '#FEF07E',
  '#FEE94E',
  '#F7A738',
  '#FECB85',
  '#FDB657',
  '#FD9726',
  '#ED6C1F',
  '#F290B1',
  '#EE6492',
  '#E62465',
  '#AB1A57',
  '#ED9A9B',
  '#E37475',
  '#F1453D',
  '#C42A2E',
  '#BDA198',
  '#A37F73',
  '#7F3F3D',
  '#5B2F2F',
  '#CFD8DC',
  '#91A4AD',
  '#617D8A',
  '#465A63',
  '#37474F',
];

export const NOT_COMPATIBLE_AGENTS = [
  'quark',
  'micromessenger',
  'weibo',
  'douban',
] as const;

export const DOWNLOAD_DELAY = 800;
