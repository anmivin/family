import { http, HttpResponse } from 'msw';

const skillsHandler = [
  http.post('/skill', ({ params }) => {
    const { name, connection } = params;
    return new HttpResponse('ok', { status: 200 });
  }),

  http.get('/skills', ({ cookies }) => {
    return HttpResponse.json([
      {
        id: '1',
        name: 'Первый',
      },
      {
        id: '2',
        name: 'Второй',
      },
      {
        id: '3',
        name: 'Третий',
      },
      {
        id: '4',
        name: 'Четвертый',
      },
      {
        id: '5',
        name: 'Пятый',
      },
      {
        id: '6',
        name: 'Шестой',
      },
    ]);
  }),
];

export default skillsHandler;
