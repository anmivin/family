import { FC, HTMLAttributes, ReactNode } from 'react';
import { Color } from '@shared/theme/color';
import { css, styled } from '@mui/material/styles';

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  size?: number;
  viewBox?: string;
  isLineIcon?: boolean;
  responsive?: boolean;
  children?: ReactNode;
  color?: Color;
}
export type IconComponent = FC<IconProps>;

const IconWrapper: IconComponent = ({ size = 24, viewBox = '0 0 24 24', children, responsive, ...rest }: IconProps) => {
  return (
    <StyledSvg
      {...rest}
      width={responsive ? '100%' : size}
      height={responsive ? undefined : size}
      responsive={responsive}
      viewBox={viewBox}
    >
      {children}
    </StyledSvg>
  );
};

const StyledSvg = styled('svg')<IconProps>`
  ${({ theme, isLineIcon, color, responsive }) => {
    const cssColor = color ? theme.color[color] : 'currentColor';

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
