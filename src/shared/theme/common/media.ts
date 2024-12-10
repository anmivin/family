export type Breakpoints = Record<MediaSize, number>;
export type Media = Record<MediaSize, string>;

export enum MediaSize {
    lg = 'lg',
    md = 'md',
    sm = 'sm',
    xs = 'xs',
}

export const breakpoints: Breakpoints = {
    [MediaSize.lg]: 1200,
    [MediaSize.md]: 992,
    [MediaSize.sm]: 768,
    [MediaSize.xs]: 576,
};

export const media: Media = {
    lg: `@media (max-width: ${breakpoints[MediaSize.lg] - 1}px)`,
    md: `@media (max-width: ${breakpoints[MediaSize.md] - 1}px)`,
    sm: `@media (max-width: ${breakpoints[MediaSize.sm] - 1}px)`,
    xs: `@media (max-width: ${breakpoints[MediaSize.xs] - 1}px)`,
};
