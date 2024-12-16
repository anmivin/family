import CharacterCard from '../entities/CharacterCard';
import AddTaskButton from '../shared/ui/AddTaskButton';
import { Box, styled } from '@mui/material';
import Tabs from '../shared/ui/Tabs';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import CharacteristicChart from '@features/CharacteristicChart/CharacteristicChart';
import SkillsChart from '@features/SkillsChart/SkillsChart';
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

interface UserType {
  name: string;
  level: number;
  xp: number;
  gold: number;
  levelName: string;
  characteristics: { health: number; science: number; art: number; household: number; beauty: number; social: number };
  skills: { id: string; level: number }[];
}

const Character = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [user, setUser] = useState<UserType | null>(null);
  const [skills, setSkills] = useState<
    | {
        id: string;
        name: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    axios
      .get('/user')
      .then((res) => res.data)
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    axios
      .get('/skills')
      .then((res) => res.data)
      .then((data) => setSkills(data));
  }, []);

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
        {user && <> {selectedTab === 2 && <CharacteristicChart userCharacteristics={user?.characteristics} />}</>}

        {user && skills && <>{selectedTab === 3 && <SkillsChart skills={skills} userSkills={user.skills} />}</>}
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
