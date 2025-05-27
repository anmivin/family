import Tabs from '@ui/Tabs';

import HabitTable from '@entities/HabitTable/HabitTable';
import SimpleTasks from '@entities/SimpleTasks/SimpleTasks';
import { useState } from 'react';
import TasksTab from '@features/TasksTab/TasksTab';

const Tasks = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <Tabs
        tabs={[
          { label: 'Все', value: 1 },
          { label: 'Привычки', value: 2 },
          { label: 'Простые', value: 3 },
        ]}
        value={selectedTab}
        onChange={setSelectedTab}
      />
      {selectedTab === 1 && <TasksTab />}
      {selectedTab === 2 && <HabitTable />}
      {selectedTab === 3 && <SimpleTasks />}
    </>
  );
};

export default Tasks;
