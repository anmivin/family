import { Box, Select, MenuItem } from '@mui/material';
import TaskCard from '@ui/TaskCard/TaskCard';
import AddTaskButton from '@ui/AddTaskButton';
import axios, { AxiosRequestConfig } from 'axios';
import Tabs from '../shared/ui/Tabs';
import { groupBy, keyBy } from 'lodash';
import HabitTable from '@entities/HabitTable/HabitTable';
import Routine from '@entities/Routine/Routine';
import { useEffect, useState, useMemo } from 'react';
import { TaskCardProps } from '@ui/TaskCard/TaskCard.types';
import { eachDayOfInterval, format, getDaysInMonth, isSameDay } from 'date-fns';
import useSwr from '../shared/swr/useSwr';
const Tasks = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const { data: tasks, loading: loadingTasks, error } = useSwr({ func: () => axios.get('/tasks') });

  return (
    <>
      <Tabs
        tabs={[
          { label: 'Все', value: 1 },
          { label: 'Привычки', value: 2 },
          { label: 'Навыки', value: 3 },
        ]}
        value={selectedTab}
        onChange={setSelectedTab}
      />
      {selectedTab === 1 && (
        <Box display="flex" flexDirection="column" gap={2} p={2}>
          <Select>
            <MenuItem>Все</MenuItem>
            <MenuItem>Открытые</MenuItem>
            <MenuItem>Праздники</MenuItem>
            <MenuItem>Привычки</MenuItem>
          </Select>
          {/*       <>кнопа создания таски</>
    <>кнопа редактирования порядка, показывать ли прошедшие</> */}
          {error}
          {loadingTasks || !tasks || !tasks?.length ? (
            <>dkdkd</>
          ) : (
            <>
              {tasks.map((task) => (
                <TaskCard {...task} key={task.id} />
              ))}
            </>
          )}

          <AddTaskButton />
        </Box>
      )}
      {selectedTab === 2 /*  <Routine /> */ && <HabitTable />}
    </>
  );
};

export default Tasks;
