import { http, HttpResponse } from 'msw';
import { userSkills, skills } from './faker';
const skillsHandler = [
  http.get('/faker/lists/skills/user', () => {
    return HttpResponse.json(userSkills());
  }),

  http.get('/faker/lists/skills', () => {
    return HttpResponse.json(skills);
  }),
];

export default skillsHandler;
