import { FC, HTMLAttributes, ReactNode } from 'react';
import { Color } from '@theme/themeVariants';
import { css, styled } from '@mui/material/styles';

export interface IconProps extends Omit<HTMLAttributes<SVGSVGElement>, 'color'> {
  size?: number;
  viewBox?: string;
  isLineIcon?: boolean;
  responsive?: boolean;
  children?: ReactNode;
  svgColor?: Color;
}
export type IconComponent = FC<IconProps>;

const IconWrapper: IconComponent = ({
  size = 24,
  viewBox = '0 0 24 24',
  svgColor,
  children,
  responsive,
  ...rest
}: IconProps) => {
  return (
    <StyledSvg
      {...rest}
      width={responsive ? '100%' : size}
      height={responsive ? undefined : size}
      responsive={responsive}
      viewBox={viewBox}
      svgColor={svgColor}
    >
      {children}
    </StyledSvg>
  );
};

const StyledSvg = styled('svg')<IconProps & { svgColor?: Color }>`
  ${({ theme, isLineIcon, svgColor, responsive }) => {
    const cssColor = svgColor ? theme.color[svgColor] : 'currentColor';

    return isLineIcon
      ? css`
          fill: none;
          stroke: ${cssColor};
          stroke-width: 1.5;
          max-height: ${responsive ? '100%' : ''};
        `
      : css`
          fill: ${cssColor};
          max-height: ${responsive ? '100%' : ''};
        `;
  }}
`;

export default IconWrapper;
