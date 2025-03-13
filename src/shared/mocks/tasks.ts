import { http, HttpResponse } from 'msw';
import { components } from '@api/Api';
import { userTasks, selectedTask } from './faker';
const taskHandler = [
  http.get('/faker/tasks', ({ request }) => {
    const url = new URL(request.url);

    const isActive = url.searchParams.get('isActive');
    const isCompleted = url.searchParams.get('isCompleted');
    const isApproving = url.searchParams.get('isApproving');
    const isDeclined = url.searchParams.get('isDeclined');
    const isHabit = url.searchParams.get('isHabit');

    const filteredTasks = userTasks.filter((task) => {
      if (isActive) return task.isActive;
      if (isCompleted) return task.isCompleted;
      if (isApproving) return task.isApproving;
      if (isDeclined) return task.isDeclined;
      if (isHabit) return task.isHabit;
      return task;
    });
    return HttpResponse.json(filteredTasks);
  }),

  http.get('/faker/tasks/:id', ({ params }) => {
    const { id } = params;

    const task = selectedTask(id as string);
    if (!task) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json(selectedTask(id as string));
  }),
];

export default taskHandler;
