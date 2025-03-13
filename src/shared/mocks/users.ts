import { http, HttpResponse } from 'msw';
import { randomUser, featureList } from './faker';
const userHandler = [
  http.post('/login', async ({ request }) => {
    const req = await request.json();
    const { name, password } = req;
    if (name === 'admin' && password === 'admin') {
      return HttpResponse.json({
        access: '1a2b3c4d',
        refresh: '0l7n5ff',
      });
    } else {
      return new HttpResponse('null', { status: 404 });
    }
  }),

  http.get('/faker/auth/me', () => {
    /*     return new HttpResponse('null', { status: 404 }); */
    return HttpResponse.json(randomUser());
  }),

  http.get('/faker/lists/features/user', () => {
    return HttpResponse.json(featureList());
  }),
];

export default userHandler;
