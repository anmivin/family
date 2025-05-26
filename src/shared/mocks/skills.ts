import { http, HttpResponse } from 'msw';
import { userSkills, skills, selectedSkill } from './faker';
const skillsHandler = [
  http.get('/characteristics/skills/user', () => {
    return HttpResponse.json(userSkills());
  }),

  http.get('/characteristics/skills', () => {
    return HttpResponse.json(skills);
  }),

  http.get('/characteristics/skill/:id', ({ params }) => {
    const { id } = params;
    const skill = selectedSkill(id as string);
    if (!skill) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(skill);
  }),
];

export default skillsHandler;
