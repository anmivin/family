import { ReactElement, ReactNode } from 'react';
import Tasks from '../../pages/tasks';
import Menu from '../../pages/menu';
import Calendar from '../../pages/calendar';
import Character from '../../pages/character';
import Settings from '../../pages/settings';
import Achievements from '../../pages/achievements';
import Family from '../../pages/family';
import Household from '../../pages/household';
import Notes from '../../pages/notes';
import Shopping from '../../pages/shopping';
import Budget from '../../pages/budget';

import { NotesIcon, HomeIcon, CharacterIcon, SettingsIcon, TaskIcon, CalendarIcon } from '../ui/Icons';
/* Task Assignments: 
Allow users to assign tasks to other family members, making it easier to delegate responsibilities.
Task Categories: 
Introduce categories for tasks, such as "Errands," "Chores," "Personal," etc., 
to help with organization and filtering.
Task Prioritization: 
Implement a system for prioritizing tasks, using colors, numbers, or letters 
to indicate their urgency and importance.
Reward System: 
Consider introducing a reward system, where users can earn points or badges 
for completing tasks, which can be redeemed for privileges or treats.
Social Sharing: 
Allow users to share their progress and achievements on social media, 
fostering a sense of community and accountability.

 */

export const Paths = {
  achievemnts: '/achievemnts',
  budget: '/budget',
  calendar: '/calendar',
  character: '/character',
  family: '/family',
  household: '/household',
  menu: '/menu',
  notes: '/notes',
  settings: '/settings',
  shopping: '/shopping',
  tasks: '/tasks',
} as const;

interface RoutesProps {
  key: string;
  link: string;
  Component: () => ReactElement;
  icon: ReactNode;
  name: string;
}

export const menuRoutes: RoutesProps[] = [
  {
    key: '',
    link: Paths.achievemnts,
    Component: Achievements,
    icon: <CalendarIcon />,
    name: 'Достижения',
  },
  {
    key: '',
    link: Paths.budget,
    Component: Budget,
    icon: <CalendarIcon />,
    name: 'Бюджет',
  },
  {
    key: '',
    link: Paths.calendar,
    Component: Calendar,
    icon: <CalendarIcon />,
    name: 'Календарь',
  },
  {
    key: '',
    link: Paths.character,
    Component: Character,
    icon: <CharacterIcon />,
    name: 'Персонаж',
  },
  {
    key: '',
    link: Paths.family,
    Component: Family,
    icon: <CalendarIcon />,
    name: 'Семья',
  },
  {
    key: '',
    link: Paths.household,
    Component: Household,
    icon: <HomeIcon />,
    name: 'Дом',
  },
  {
    key: '',
    link: Paths.menu,
    Component: Menu,
    icon: <CalendarIcon />,
    name: 'Меню',
  },
  {
    key: '',
    link: Paths.notes,
    Component: Notes,
    icon: <NotesIcon />,
    name: 'Заметки',
  },
  {
    key: '',
    link: Paths.settings,
    Component: Settings,
    icon: <SettingsIcon />,
    name: 'Настройки',
  },
  {
    key: '',
    link: Paths.shopping,
    Component: Shopping,
    icon: <SettingsIcon />,
    name: 'Покупки',
  },
  {
    key: '',
    link: Paths.tasks,
    Component: Tasks,
    icon: <TaskIcon />,
    name: 'Задачи',
  },
];

const defaultRouting = [
  {
    key: '/menu',
    order: 1,
  },
  {
    key: '/character',
    order: 2,
  },
  {
    key: '/tasks',
    order: 3,
  },
  {
    key: '/settings',
    order: 4,
  },
];
export const getRoutes = () => {
  const storage = localStorage.getItem('routes');
  const initialState: [] = storage ? JSON.parse(storage) : defaultRouting;
  return menuRoutes
    .filter((route) => initialState.some((state) => state.key === route.link))
    .sort((a, b) =>
      initialState.find((item) => item.key === a.link)?.order > initialState.find((item) => item.key === b.link)?.order
        ? 1
        : -1
    );
};
