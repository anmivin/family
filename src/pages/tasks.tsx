import { Box } from '@mui/material';
import TaskCard from '@ui/TaskCard/TaskCard';
import AddTaskButton from '@ui/AddTaskButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TaskCardProps } from '@ui/TaskCard/TaskCard.types';
const Tasks = () => {
  const [tasks, setTasks] = useState<TaskCardProps[]>([]);

  useEffect(() => {
    axios
      .get('/tasks')
      .then((res) => res.data)
      .then((data) => setTasks(data));
  }, []);
  return (
    <Box display="flex" flexDirection="column" gap={2} p={2}>
      {/*       <>кнопа создания таски</>
      <>кнопа редактирования порядка, показывать ли прошедшие</> */}
      {tasks.map((task) => (
        <TaskCard {...task} key={task.id} />
      ))}

      <AddTaskButton />
    </Box>
  );
};

export default Tasks;
