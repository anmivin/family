// src/mocks/modules/user.ts

import { http, HttpResponse } from 'msw';

const userHandler = [
  http.post('/login', ({ params }) => {
    const { password, username } = params;
    if (username === 'Amir' && password === '123') {
      return HttpResponse.json({
        access: '1a2b3c4d',
        refresh: '0l7n5ff',
      });
    } else {
      return new HttpResponse('null', { status: 404 });
    }
  }),
  //продуктивность -- тасок в день, дисциплина -- стрик
  http.get('/user', ({ cookies }) => {
    console.log(cookies);
    return HttpResponse.json({
      name: 'Имечко',
      level: 3,
      xp: 1000,
      gold: 500,
      levelName: 'Мегагуд',
      characteristics: { health: 2, science: 9, art: 6, household: 2, beauty: 1, social: 7 },
      skills: [
        {
          id: '1',
          level: 7,
        },
        {
          id: '3',
          level: 3,
        },
        {
          id: '4',
          level: 6,
        },
        {
          id: '6',
          level: 2,
        },
      ],
    });
  }),
];

export default userHandler;
