const getSpritesList = (sprites: any): any => {
  try {
    type A = keyof typeof sprites;

    const SpritesObject: Record<A, A> = {};
    for (const spritePath in sprites) {
      let spriteName = spritePath.split('/').pop();
      if (!spriteName) {
        console.error('Folder is empty');
        return {};
      }

      spriteName = spriteName.replace('.svg', '');
      const spriteKey = spriteName.replaceAll('-', '_');

      SpritesObject[spriteKey] = spriteName;
    }

    return SpritesObject;
  } catch (err) {
    console.error(err);
  }
};

export enum WidgetType {
  SoccerShape = 'soccer',
  GedgetsShape = 'gedgets',
  BeardShape = 'beard',
  HairShape = 'hair',
  CoatShape = 'coat',
  BodyShape = 'body',
  HeadpieceShape = 'headpiece',
  FaceShape = 'face',
  BagShape = 'bag',
  NecklaceShape = 'necklace',
  GlassesShape = 'glasses',
  DressShape = 'dress',
  TshirtShape = 'tshirt',
  ShoeShape = 'shoe',
  PantShape = 'pant',
  AccessibilityItemShape = 'accessibility-item',
}

/**
 * WidgetShape
 *
 * All enumeration values of `WidgetShape` correspond to the file name.
 */

// ============ accessibility-item
const accessibilityItemSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/accessibility-item/*.svg'
);
export const AccessibilityItemShape = getSpritesList(accessibilityItemSprites);

// ============ bag
const bagSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/bag/*.svg'
);
export const BagShape = getSpritesList(bagSprites);

// ============ beard
const beardSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/beard/*.svg'
);
export const BeardShape = getSpritesList(beardSprites);

// ============ body
const bodySprites = import.meta.glob<string[]>(
  '@/assets/widget-options/body/*.svg'
);
export const BodyShape = getSpritesList(bodySprites);

// ============ coat
const coatSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/coat/*.svg'
);
export const CoatShape = getSpritesList(coatSprites);

// ============ dress
const dressSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/dress/*.svg'
);
export const DressShape = getSpritesList(dressSprites);

// ============ face
const faceSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/face/*.svg'
);
export const FaceShape = getSpritesList(faceSprites);

// ============ gedgets
const gedgetsSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/gedgets/*.svg'
);
export const GedgetsShape = getSpritesList(gedgetsSprites);

// ============ glasses
const glassesSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/glasses/*.svg'
);
export const GlassesShape = getSpritesList(glassesSprites);

// ============ headpiece
const headpieceSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/headpiece/*.svg'
);
export const HeadpieceShape = getSpritesList(headpieceSprites);

// ============ hair
const hairSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/hair/*.svg'
);
export const HairShape = getSpritesList(hairSprites);

// ============ necklace
const necklaceSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/necklace/*.svg'
);
export const NecklaceShape = getSpritesList(necklaceSprites);

// ============ pant
const pantSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/pant/*.svg'
);
export const PantShape = getSpritesList(pantSprites);

// ============ shoe
const shoeSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/shoe/*.svg'
);
export const ShoeShape = getSpritesList(shoeSprites);

// ============ soccer
const soccerSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/soccer/*.svg'
);
export const SoccerShape = getSpritesList(soccerSprites);

// ============ tshirt
const tshirtSprites = import.meta.glob<string[]>(
  '@/assets/widget-options/tshirt/*.svg'
);
export const TshirtShape = getSpritesList(tshirtSprites);

export type WidgetShape =
  | typeof AccessibilityItemShape
  | typeof BagShape
  | typeof BeardShape
  | typeof BodyShape
  | typeof CoatShape
  | typeof DressShape
  | typeof FaceShape
  | typeof GedgetsShape
  | typeof GlassesShape
  | typeof HeadpieceShape
  | typeof HairShape
  | typeof NecklaceShape
  | typeof PantShape
  | typeof ShoeShape
  | typeof SoccerShape
  | typeof TshirtShape;
