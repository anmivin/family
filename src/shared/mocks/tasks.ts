import { http, HttpResponse } from 'msw';

import { userTasks, selectedTask } from './faker';
const taskHandler = [
  http.get('/tasks', (props /* { params, request } */) => {
    /*     const url = new URL(request.url); */
    console.log('tasks', props);
    /*     const status = url.searchParams.get('status'); */

    const filteredTasks = userTasks.filter((task) => {
      /*  if (status) return task.status === status; */
      /*  if (isCompleted) return task.isCompleted;
      if (isApproving) return task.isApproving;
      if (isDeclined) return task.isDeclined;
      if (isHabit) return task.isHabit; */
      return true;
    });

    return HttpResponse.json({ total: userTasks.length, items: filteredTasks });
  }),

  http.get('/tasks/:id', (params) => {
    const { id } = params;
    console.log('params', params);
    const task = selectedTask(id as string);
    if (!task) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json(task);
  }),
];

export default taskHandler;
