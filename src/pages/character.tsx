import PlusButton from '@ui/PlusButton';
import { Box } from '@mui/material';
import Tabs from '@ui/Tabs';

import { useCallback, useState } from 'react';

import SkillsChart from '@features/SkillsTab/SkillsChart';

import FeaturesTab from '@features/FeaturesTab/FeaturesTab';
import { setIsTaskFormOpen, setIsSkillFormOpen } from '@shared/stores/modals/modals.store';
import CharacterTab from '@features/CharacterTab/CharacterTab';
import { useAppDispatch } from '@shared/stores/global.store';

const Character = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const dispatch = useAppDispatch();
  const onOpen = useCallback(() => {
    dispatch(selectedTab === 1 ? setIsTaskFormOpen(true) : setIsSkillFormOpen(true));
  }, [selectedTab]);

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
        {selectedTab === 1 && (
          <CharacterTab onSkillClick={() => setSelectedTab(3)} onFeatureClick={() => setSelectedTab(2)} />
        )}
        {selectedTab === 2 && <FeaturesTab />}
        {selectedTab === 3 && <SkillsChart />}
        <PlusButton onOpen={onOpen} />

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
