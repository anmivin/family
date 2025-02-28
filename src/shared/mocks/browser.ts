import { setupWorker } from 'msw/browser';
import userHandler from './users';
import taskHandler from './tasks';
import skillsHandler from './skills';
import errorHandler from './error';
export const worker = setupWorker(...errorHandler, ...userHandler, ...taskHandler, ...skillsHandler);
