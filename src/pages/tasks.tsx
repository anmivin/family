import { Box, Drawer } from '@mui/material';
import TaskCard from '../shared/ui/TaskCard/TaskCard';
import AddTaskButton from '../shared/ui/AddTaskButton';

const Tasks = () => {
  const tasks = [
    {
      id: '',
      name: 'nazvanie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2024-12-04T07:19:45.580120Z',
      timed: true,
      creator: '',
      repeat: 6,
    },
    {
      id: '',
      name: 'nazvanie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2024-11-02',
      timed: false,
      creator: 'dddddd',
      repeat: 0,
    },
    {
      id: '',
      name: 'nazvanie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      creator: '',
      repeat: 0,
    },
  ];
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {/*       <>кнопа создания таски</>
      <>кнопа редактирования порядка, показывать ли прошедшие</> */}
      {tasks.map((task) => (
        <TaskCard {...task} />
      ))}

      <AddTaskButton />
    </Box>
  );
};

export default Tasks;
