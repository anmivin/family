import MovieSearchTab from '@features/MovieSearchTab/MovieSearchTab';
import CreateList from '@features/CreateList/CreateList';
import Tabs from '@ui/Tabs';
import { useState } from 'react';
import useSwr from '@shared/swr/useSwr';
import { Box } from '@mui/material';
const Lists = () => {
  const { data, loading } = useSwr({ url: '/lists' });

  const [selectedTab, setSelectedTab] = useState(1);
  if (loading) return <>...</>;
  return (
    <>
      <Tabs
        tabs={[
          ...(data ?? []).map((item, index) => ({
            label: item.title,
            value: index + 1,
          })),
          { label: 'Создать +', value: (data?.length ?? 0) + 1 },
        ]}
        value={selectedTab}
        onChange={setSelectedTab}
      />
      <Box p={4}>
        {selectedTab === (data?.length ?? 0) + 1 && <CreateList />}
        {/* <MovieSearchTab /> */}
      </Box>
    </>
  );
};

export default Lists;
