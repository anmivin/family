import CharacterCard from '../entities/CharacterCard';
import AddTaskButton from '../shared/ui/AddTaskButton';
import { Box, styled } from '@mui/material';
import Tabs from '../shared/ui/Tabs';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Doughnut, Radar } from 'react-chartjs-2';
import { characteristics } from '../shared/constants/characteristics';
import { CharacterCardProps } from '@entities/CharacterCard/CharacterCard.types';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const userCharacteristics = {
  health: 2,
  science: 9,
  art: 6,
  household: 2,
  beauty: 1,
  social: 7,
};

const Character = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [user, setUser] = useState<CharacterCardProps | null>(null);

  useEffect(() => {
    axios
      .get('/user')
      .then((res) => res.data)
      .then((data) => setUser(data));
  }, []);
  /*  const getData = useCallback(() => {
    const labels = [];
    const data = [];
    characteristics.map((c) => {
      labels.push(c.id);
      const userLevel = userCharacteristics[c.id.toLowerCase()];
      data.push(userLevel);
    });
    return {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  }, []); */
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
        {/*   {selectedTab === 2 && <Radar data={getData()} />} */}

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
