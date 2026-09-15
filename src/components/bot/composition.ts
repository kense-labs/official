/** Composable Kense Work Bot identity — vinyl-toy parts, not Grok/Discord geometry. */

export type BotBody = 'crystal' | 'terminal' | 'flux' | 'lens' | 'spark' | 'scout';
export type BotEyes = 'beads' | 'pixel' | 'line' | 'glow';
export type BotOutfit = 'none' | 'puffer' | 'hoodie' | 'scarf' | 'sweater';
export type BotHat = 'none' | 'shard' | 'visor' | 'leaf' | 'antenna' | 'cap';

export type BotPalette = {
  skin: string;
  skinDeep: string;
  skinLight: string;
  accent: string;
  accentSoft: string;
  outfit: string;
  outfitDeep: string;
  ink: string;
};

export type BotComposition = {
  id: string;
  body: BotBody;
  eyes: BotEyes;
  outfit: BotOutfit;
  hat: BotHat;
  palette: BotPalette;
  /** Relative height in the squad (0.75–1.15). */
  scale?: number;
  /** Horizontal lean for pose variety. */
  lean?: number;
};

export const PALETTES = {
  violet: {
    skin: '#7B6AF5',
    skinDeep: '#4A38C9',
    skinLight: '#C4B7FF',
    accent: '#9D88F3',
    accentSoft: '#E4DCFF',
    outfit: '#F2F0FA',
    outfitDeep: '#D8D4E8',
    ink: '#16122A',
  },
  indigo: {
    skin: '#5B6CFF',
    skinDeep: '#2F3DB8',
    skinLight: '#B8C0FF',
    accent: '#4E60FF',
    accentSoft: '#DCE1FF',
    outfit: '#2A2550',
    outfitDeep: '#1A1638',
    ink: '#0E0C1C',
  },
  cream: {
    skin: '#F0E6D4',
    skinDeep: '#D4C4A8',
    skinLight: '#FFF8EC',
    accent: '#F0A84A',
    accentSoft: '#FFE2B0',
    outfit: '#2C2A32',
    outfitDeep: '#1A181E',
    ink: '#1A1520',
  },
  blush: {
    skin: '#E8D4F0',
    skinDeep: '#C9A8D8',
    skinLight: '#FAF0FF',
    accent: '#FF7AB2',
    accentSoft: '#FFD0E4',
    outfit: '#D8C8F0',
    outfitDeep: '#B8A0D8',
    ink: '#2A1838',
  },
  mint: {
    skin: '#D8F0EA',
    skinDeep: '#A8D4C8',
    skinLight: '#F2FFFB',
    accent: '#3EE0A8',
    accentSoft: '#B8FFE0',
    outfit: '#3A3558',
    outfitDeep: '#242038',
    ink: '#142028',
  },
  ember: {
    skin: '#6A5AF0',
    skinDeep: '#3E2EC0',
    skinLight: '#B8AEFF',
    accent: '#FF7A3D',
    accentSoft: '#FFC4A0',
    outfit: '#2E2A48',
    outfitDeep: '#1A1630',
    ink: '#120E22',
  },
} as const satisfies Record<string, BotPalette>;

/** Official Kense Work squad — distinct silhouettes, shared vinyl language. */
export const KENSE_BOT_SQUAD: BotComposition[] = [
  {
    id: 'scout',
    body: 'scout',
    eyes: 'line',
    outfit: 'scarf',
    hat: 'none',
    palette: PALETTES.ember,
    scale: 0.98,
    lean: -4,
  },
  {
    id: 'terminal',
    body: 'terminal',
    eyes: 'pixel',
    outfit: 'none',
    hat: 'none',
    palette: PALETTES.cream,
    scale: 0.72,
    lean: 2,
  },
  {
    id: 'flux',
    body: 'flux',
    eyes: 'beads',
    outfit: 'hoodie',
    hat: 'none',
    palette: PALETTES.indigo,
    scale: 1.08,
    lean: 0,
  },
  {
    id: 'crystal',
    body: 'crystal',
    eyes: 'beads',
    outfit: 'puffer',
    hat: 'shard',
    palette: PALETTES.violet,
    scale: 1.12,
    lean: 0,
  },
  {
    id: 'lens',
    body: 'lens',
    eyes: 'line',
    outfit: 'sweater',
    hat: 'cap',
    palette: PALETTES.blush,
    scale: 1.05,
    lean: 3,
  },
  {
    id: 'spark',
    body: 'spark',
    eyes: 'glow',
    outfit: 'none',
    hat: 'antenna',
    palette: PALETTES.mint,
    scale: 0.7,
    lean: -6,
  },
];

export const BOT_BY_ID = Object.fromEntries(
  KENSE_BOT_SQUAD.map((b) => [b.id, b]),
) as Record<string, BotComposition>;
