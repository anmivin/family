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
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface UserType extends CharacterCardProps {
  characteristics: { [key: string]: number };
}
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
        {selectedTab === 2 && (
          <Box width="90vw" height="80vh" sx={{ margin: 'auto' }}>
            <Radar
              data={getData()}
              options={{
                elements: {
                  line: {
                    borderWidth: 8,
                  },
                },
              }}
            />
          </Box>
        )}

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
