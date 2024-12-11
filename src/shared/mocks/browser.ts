import { setupWorker } from 'msw/browser';
import userHandler from './users';
import taskHandler from './tasks';
import skillsHandler from './skills';
export const worker = setupWorker(...userHandler, ...taskHandler, ...skillsHandler);
