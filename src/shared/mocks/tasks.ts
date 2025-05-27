import { http, HttpResponse } from 'msw';

import { userTasks, selectedTask } from './faker';

const taskHandler = [
  http.get('/tasks', ({ request }) => {
    const url = new URL(request.url);

    const limit = url.searchParams.get('limit');
    const status = url.searchParams.get('status');
    const type = url.searchParams.get('type');
    const filteredTasks = userTasks.filter((task) => {
      if (status) return task.status === status;
      if (type) return task.type === type;

      return true;
    });

    return HttpResponse.json({ total: filteredTasks.length, items: filteredTasks.slice(0, limit ? +limit : 0) });
  }),

  http.get('/tasks/:id', ({ params }) => {
    const { id } = params;
    const task = selectedTask(id as string);
    if (!task) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json(task);
  }),
];

export default taskHandler;
