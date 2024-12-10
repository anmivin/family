import { Box } from '@mui/material';
import TaskCard from '../shared/ui/TaskCard/TaskCard';
const Tasks = () => {
  const tasks = [
    {
      id: '',
      name: 'nazvanie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2024-11-02',
      creator: '',
      repeat: 0,
    },
    {
      id: '',
      name: 'nazvanie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2024-11-02',
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
    </Box>
  );
};

export default Tasks;
