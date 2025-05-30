import { ReactElement, ReactNode } from 'react';
import Tasks from '@pages/tasks';
import Menu from '@pages/menu';
import Calendar from '@pages/calendar';
import Character from '@pages/character';
import Settings from '@pages/settings';
import Achievements from '@pages/achievements';
import Family from '@pages/family';
import Household from '@pages/household';
import Notes from '@pages/notes';
import Shopping from '@pages/shopping';
import Budget from '@pages/budget';
import Lists from '@pages/lists';

import {
  NotesIcon,
  HomeIcon,
  CharacterIcon,
  SettingsIcon,
  TaskIcon,
  CalendarIcon,
  ShoppingBasketIcon,
  FridgeIcon,
  TrophyCapIcon,
  WalletIcon,
  TwoHeartsIcon,
} from '@ui/Icons';

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
  lists: '/lists',
  menu: '/menu',
  notes: '/notes',
  settings: '/settings',
  shopping: '/shopping',
  tasks: '/tasks',
  login: '/login',
  loginID: '/login/:id',
} as const;

export interface RoutesProps {
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
    icon: <TrophyCapIcon />,
    name: 'Достижения',
  },
  {
    key: '',
    link: Paths.budget,
    Component: Budget,
    icon: <WalletIcon />,
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
    icon: <TwoHeartsIcon />,
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
    link: Paths.lists,
    Component: Lists,
    icon: <NotesIcon />,
    name: 'Списки',
  },
  {
    key: '',
    link: Paths.menu,
    Component: Menu,
    icon: <FridgeIcon />,
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
    link: Paths.shopping,
    Component: Shopping,
    icon: <ShoppingBasketIcon />,
    name: 'Покупки',
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
    link: Paths.tasks,
    Component: Tasks,
    icon: <TaskIcon />,
    name: 'Задачи',
  },
];

export const defaultRouting = [
  {
    key: Paths.character,
    order: 1,
  },
  {
    key: Paths.tasks,
    order: 2,
  },
  {
    key: Paths.achievemnts,
    order: 3,
  },
  {
    key: Paths.lists,
    order: 4,
  },
  {
    key: Paths.calendar,
    order: 5,
  },
  {
    key: Paths.budget,
    order: 6,
  },
  {
    key: Paths.family,
    order: 7,
  },
  {
    key: Paths.menu,
    order: 8,
  },
  {
    key: Paths.household,
    order: 9,
  },
  {
    key: Paths.notes,
    order: 10,
  },
  {
    key: Paths.shopping,
    order: 11,
  },
  {
    key: Paths.settings,
    order: 12,
  },
];
