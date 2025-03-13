import AddTaskButton from '../shared/ui/AddTaskButton';
import { Box } from '@mui/material';
import Tabs from '../shared/ui/Tabs';
import axios from 'axios';
import { useState } from 'react';
import useSwr from '../shared/swr/useSwr';
import SkillsChart from '@features/SkillsTab/SkillsChart';

import FeaturesTab from '@features/FeaturesTab/FeaturesTab';

import CharacterTab from '@features/CharacterTab/CharacterTab';
import { useAppSelector } from '@stores/global.store';

const Character = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  /*   const { data: user, loading: loadingUser } = useSwr({
    func: () => axios.get('/users'),
  });

  const { data: skills, loading: loadingSkills } = useSwr({
    func: () => axios.get('/skills').then((res) => res.data),
  });

  const {
    data: error,
    loading: loadingError,
    error: justError,
  } = useSwr({
    func: () => axios.get('/error').then((res) => res.data),
  });
 */

  const { userFeatures, pendingUserFeatures, errorUserFeatures, userSkills } = useAppSelector(
    (state) => state.listSlice
  );

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
        {selectedTab === 1 && <CharacterTab />}
        {selectedTab === 2 && <FeaturesTab />}
        {selectedTab === 3 && <SkillsChart />}
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
