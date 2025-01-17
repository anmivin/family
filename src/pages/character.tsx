import CharacterCard from '../entities/CharacterCard';
import AddTaskButton from '../shared/ui/AddTaskButton';
import { Box, Button, styled } from '@mui/material';
import Tabs from '../shared/ui/Tabs';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import useSwr from '../shared/swr/useSwr';
import SkillsChart from '@features/SkillsChart/SkillsChart';

import CharacteristicFlow from '@features/CharacteristicFlow/CharacteristicFlow';

const Character = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const { data: user, loading: loadingUser } = useSwr({
    key: 'user',
    func: () => axios.get('/user').then((res) => res.data),
  });

  const { data: skills, loading: loadingSkills } = useSwr({
    key: 'skills',
    func: () => axios.get('/skills').then((res) => res.data),
  });

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
        {user && <> {selectedTab === 2 && <CharacteristicFlow data={user.features} />}</>}
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
