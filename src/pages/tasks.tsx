import { Box, TableBody, TableRow, TableCell, TableHead, Table, Select, MenuItem } from '@mui/material';
import TaskCard from '@ui/TaskCard/TaskCard';
import AddTaskButton from '@ui/AddTaskButton';
import axios, { AxiosRequestConfig } from 'axios';
import Tabs from '../shared/ui/Tabs';
import { groupBy, keyBy } from 'lodash';
import Routine from '@entities/Routine/Routine';
import { useEffect, useState, useMemo } from 'react';
import { TaskCardProps } from '@ui/TaskCard/TaskCard.types';
import { eachDayOfInterval, format, getDaysInMonth, isSameDay } from 'date-fns';
import useSwr from '../shared/swr/useSwr';
const Tasks = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const { data: tasks, loading: loadingTasks, error } = useSwr({ func: () => axios.get('/tasks') });

  const ta = [
    {
      date: '01-01-2025',
      id: 1,
    },
    {
      date: '01-03-2025',
      id: 2,
    },
    {
      date: '01-03-2025',
      id: 3,
    },
    {
      date: '01-03-2025',
      id: 1,
    },
    {
      date: '01-05-2025',
      id: 2,
    },
    {
      date: '01-06-2025',
      id: 2,
    },
    {
      date: '01-07-2025',
      id: 3,
    },
    {
      date: '01-08-2025',
      id: 3,
    },
    {
      date: '01-09-2025',
      id: 2,
    },
    {
      date: '01-09-2025',
      id: 1,
    },
    {
      date: '01-08-2025',
      id: 9,
    },
    {
      date: '01-16-2025',
      id: 9,
    },
  ];

  const groupedByTask = groupBy(ta, (i) => i.id);

  const daysInMonth = useMemo(() => {
    return eachDayOfInterval({ start: new Date('01-01-2025'), end: new Date('01-31-2025') });
  }, []);
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
      {selectedTab === 2 /*  <Routine /> */ && (
        <Box sx={{ overflowY: 'auto' }}>
          <Table>
            <TableHead>
              <TableCell>kzkzkz</TableCell>
              {daysInMonth.map((item) => (
                <TableCell>{format(item, 'd')}</TableCell>
              ))}
            </TableHead>
            <TableBody>
              {Object.entries(groupedByTask).map(([k, v]) => (
                <TableRow>
                  <TableCell>{k}</TableCell>
                  {daysInMonth.map((item) => {
                    const isCompleted = v.find((y) => isSameDay(new Date(y.date), item));
                    return <TableCell>{isCompleted ? 'x' : ''}</TableCell>;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </>
  );
};

export default Tasks;
