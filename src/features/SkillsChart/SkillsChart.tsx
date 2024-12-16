import { opacity, rgbaFromHex } from '@helpers/colors';
import { Box } from '@mui/material';
import { useCallback } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
};

interface SkillsChartProps {
  userSkills: { id: string; level: number }[];
  skills: {
    id: string;
    name: string;
  }[];
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsChart = ({ userSkills, skills }: SkillsChartProps) => {
  const getData = useCallback(() => {
    const labels: string[] = [];
    const data: number[] = [];
    userSkills.map((usSkill) => {
      const skill = skills.find((sk) => sk.id === usSkill.id);
      if (!skill) return;
      labels.push(skill.name);
      data.push(usSkill.level);
    });
    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: rgbaFromHex('#000', opacity['300']),
        },
      ],
    };
  }, [userSkills, skills]);
  return (
    <Box width="50vw">
      <Bar options={options} data={getData()} />
    </Box>
  );
};

export default SkillsChart;
