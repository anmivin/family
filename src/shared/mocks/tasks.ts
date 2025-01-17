import { http, HttpResponse } from 'msw';

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
  http.get('/tasks', () => {
    return HttpResponse.json([
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
    ]);
  }),
];

export default taskHandler;
