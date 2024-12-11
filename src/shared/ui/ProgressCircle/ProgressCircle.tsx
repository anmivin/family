import { useMemo } from 'react';

import { StyledSvg } from './ProgressCircle.styled';

interface ProgressCircleProps {
  size?: number;
  progress: number;
}

const ProgressCircle = ({ progress, size = 40 }: ProgressCircleProps) => {
  const svgSizes = useMemo(() => {
    const thickness = size * 0.2;
    const circumference = 2 * Math.PI * ((size - thickness) / 2);
    const strokeDasharray = circumference.toFixed(3);
    const strokeDashoffset = `${(((100 - progress) / 100) * circumference).toFixed(3)}px`;
    const radius = (size - thickness) / 2;
    return { thickness, strokeDasharray, strokeDashoffset, radius };
  }, [size]);

  return (
    <StyledSvg viewBox={`${size / 2} ${size / 2} ${size} ${size}`} width={size} height={size}>
      <circle className="path1" cx={size} cy={size} r={svgSizes.radius} fill="none" strokeWidth={svgSizes.thickness} />
      <circle
        className="path2"
        cx={size}
        cy={size}
        r={svgSizes.radius}
        fill="none"
        strokeWidth={svgSizes.thickness}
        strokeDasharray={svgSizes.strokeDasharray}
        stroke-dashoffset={svgSizes.strokeDashoffset}
      />
    </StyledSvg>
  );
};

export default ProgressCircle;
