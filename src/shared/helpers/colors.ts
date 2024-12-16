import hexRgb from 'hex-rgb';

export const opacity = {
  '25': 0.02,
  '50': 0.04,
  '75': 0.06,
  '100': 0.08,
  '150': 0.1,
  '200': 0.12,
  '300': 0.16,
  '400': 0.24,
  '500': 0.34,
  '550': 0.44,
  '600': 0.54,
  '700': 0.6,
  '800': 0.72,
  '900': 0.88,
} as const;

export const opacityOverlayLT = {
  '100': 0.06,
  '200': 0.16,
  '300': 0.29,
  '700': 0.66,
  '900': 0.94,
} as const;

export const opacityOverlayDT = {
  '100': 0.12,
  '200': 0.3,
  '300': 0.43,
  '700': 0.85,
  '900': 0.94,
} as const;

export type Alpha = keyof typeof opacity | number;
export type Opacity = Record<Alpha, number>;

export const rgba = (rgb: string, alpha: Alpha): string => {
  const a = typeof alpha === 'number' ? alpha : opacity[alpha];
  return `rgba(${rgb},${a})`;
};
export const rgbaFromHex = (hex: string, alpha: Alpha): string => {
  const rgb = hexRgb(hex, { format: 'array' }).slice(0, -1).join(',');
  return rgba(rgb, alpha);
};
