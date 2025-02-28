import { http, HttpResponse } from 'msw';
import { paths, components } from '@api/Api';
const taskHandler = [
  http.get('/calendar', () => {
    return HttpResponse.json([
      {
        id: '1',
        name: '',
        type: 'task',
        date: '01-01-2025',
      },
      {
        id: '2',
        name: '',
        type: 'task',
        date: '01-02-2025',
      },
      {
        id: '3',
        name: '',
        type: 'holiday',
        date: '01-02-2025',
      },
      {
        id: '4',
        name: '',
        type: 'task',
        date: '01-06-2025',
      },
      {
        id: '5',
        name: '',
        type: 'holiday',
        date: '01-06-2025',
      },
      {
        id: '6',
        name: '',
        type: 'holiday',
        date: '01-03-2025',
      },
    ]);
  }),
  http.get<never, components['schemas']['FindTasksDto'], components['schemas']['OutputTaskDto'][]>('/tasks', () => {
    /*     return new HttpResponse('notFound', { status: 404 }) */
    return HttpResponse.json([
      {
        name: 'nazvanie',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2024-12-04T07:19:45.580120Z',
        repeat: { period: 'Day', currency: 3 },
        difficulty: 'Legendary',
        types: {
          isImportant: true,
          isActive: false,
          isCompleted: false,
          isApproving: false,
          isDeclined: false,
          isHoliday: false,
          isHabit: false,
          isYear: false,
        },
        time: false,
        year: false,
        subtasks: [],
        skills: [],
        features: [],
      },
      {
        name: 'nazvanie',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2024-12-04T07:19:45.580120Z',
        repeat: { period: 'Day', currency: 3 },
        difficulty: 'Legendary',
        types: {
          isImportant: true,
          isActive: false,
          isCompleted: false,
          isApproving: false,
          isDeclined: false,
          isHoliday: false,
          isHabit: false,
          isYear: false,
        },
        time: false,
        year: false,
        subtasks: [],
        skills: [],
        features: [],
      },
      {
        name: 'nazvanie',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2024-12-04T07:19:45.580120Z',
        repeat: { period: 'Day', currency: 3 },
        difficulty: 'Legendary',
        types: {
          isImportant: true,
          isActive: false,
          isCompleted: false,
          isApproving: false,
          isDeclined: false,
          isHoliday: false,
          isHabit: false,
          isYear: false,
        },
        time: false,
        year: false,
        subtasks: [],
        skills: [],
        features: [],
      },
    ]);
  }),
];

export default taskHandler;
