import CharacterCard from '../entities/CharacterCard';
import AddTaskButton from '../shared/ui/AddTaskButton';
import { Box, styled } from '@mui/material';
import Tabs from '../shared/ui/Tabs';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Doughnut, Radar } from 'react-chartjs-2';
import { characteristics } from '@constants/characteristics';
import { CharacterCardProps } from '@entities/CharacterCard/CharacterCard.types';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title,
  Filler,
} from 'chart.js';
import { PolarArea, Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

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
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const Character = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    axios
      .get('/user')
      .then((res) => res.data)
      .then((data) => setUser(data));
  }, []);
  const getData = useCallback(() => {
    const labels = [];
    const data = [];
    characteristics.map((c) => {
      labels.push(c.id);
      const userLevel = user?.characteristics[c.id.toLowerCase()];
      data.push(userLevel);
    });
    return {
      labels: labels,
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
      datasets: [
        {
          label: false,
          data: data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  }, [user]);
  return (
    <>
      <Tabs
        tabs={[
          { label: 'Персонаж', value: 1 },
          { label: 'Характеристки', value: 2 },
          { label: 'Навыки', value: 3 },
        ]}
        value={selectedTab}
        onChange={setSelectedTab}
      />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        {selectedTab === 1 && user && <CharacterCard {...user} />}
        {/* 
        характеристики -- Polar area
        экспа -- linechart
        новыки -- barchart
        */}
        {selectedTab === 2 && <PolarArea data={getData()} />}
        {selectedTab === 3 && <Bar data={} options={options} />}
        <AddTaskButton />

        <>
          раздел семьи
          <>члены с контактами, др, другие даты</>
          <></>
        </>
      </Box>
    </>
  );
};

export default Character;
