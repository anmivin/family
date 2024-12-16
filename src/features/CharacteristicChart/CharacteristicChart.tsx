import { Box, styled, useTheme } from '@mui/material';
import { rgbaFromHex, opacity } from '@helpers/colors';
import { useEffect, useState, useCallback } from 'react';
import { Chart as ChartJS, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

import { characteristics } from '@constants/characteristics';

import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
  elements: {
    label: {},
    line: {
      borderWidth: 3,
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      position: 'right' as const,
    },
  },
};

interface UserCharacteristics {
  health: number;
  science: number;
  art: number;
  household: number;
  beauty: number;
  social: number;
}
interface CharacteristicChartProps {
  userCharacteristics: UserCharacteristics;
}

const CharacteristicChart = ({ userCharacteristics }: CharacteristicChartProps) => {
  const theme = useTheme();

  const getData = useCallback(() => {
    const labels: string[] = [];
    const data: number[] = [];
    const backgroundColor: string[] = [];
    const borderColor: string[] = [];
    characteristics.map((c) => {
      labels.push(c.name);
      const userLevel = userCharacteristics[c.id.toLowerCase() as keyof UserCharacteristics];
      data.push(userLevel);
      backgroundColor.push(rgbaFromHex(theme.color[c.color], opacity['600']));
      borderColor.push(theme.color[c.color]);
    });
    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    };
  }, [userCharacteristics]);
  return (
    <Box width="50vw">
      <PolarArea data={getData()} options={options} />
    </Box>
  );
};

export default CharacteristicChart;
