import { http, HttpResponse } from 'msw';

const errorHandler = [
  http.post('/error', ({ params }) => {
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

  http.get('/error', () => {
    return new HttpResponse('notFound', { status: 404 });
  }),
];

export default errorHandler;
