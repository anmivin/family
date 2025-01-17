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
      features: {
        physical_health: 2,
        mental_health: 9,
        fine_arts: 6,
        applied_arts: 2,
        performing_arts: 1,
        culture: 7,
        fun: 2,
        networking: 9,
        communication: 6,
        body: 2,
        beauty: 1,
        aethetic: 7,
        human_science: 2,
        technical_science: 9,
        languages: 6,
        erudition: 2,
        foraging: 1,
        culinary: 7,
        homekeeping: 2,
      },
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
