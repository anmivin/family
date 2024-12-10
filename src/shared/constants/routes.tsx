import { ReactElement, ReactNode } from 'react';
import Tasks from '../../pages/tasks';
import Menu from '../../pages/menu';
import Calendar from '../../pages/calendar';
import Character from '../../pages/character';
import Settings from '../../pages/settings';
import Achievements from '../../pages/achievements';
import Family from '../../pages/family';
import Household from '../../pages/household';
import Market from '../../pages/market';
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
  market: '/market',
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
}

export const menuRoutes: RoutesProps[] = [
  {
    key: '',
    link: Paths.achievemnts,
    Component: Achievements,
    icon: <CalendarIcon />,
  },
  {
    key: '',
    link: Paths.budget,
    Component: Budget,
    icon: <CalendarIcon />,
  },
  {
    key: '',
    link: Paths.calendar,
    Component: Calendar,
    icon: <CalendarIcon />,
  },
  {
    key: '',
    link: Paths.character,
    Component: Character,
    icon: <CharacterIcon />,
  },
  {
    key: '',
    link: Paths.family,
    Component: Family,
    icon: <CalendarIcon />,
  },
  {
    key: '',
    link: Paths.household,
    Component: Household,
    icon: <HomeIcon />,
  },
  {
    key: '',
    link: Paths.market,
    Component: Market,
    icon: <CalendarIcon />,
  },
  {
    key: '',
    link: Paths.menu,
    Component: Menu,
    icon: <CalendarIcon />,
  },
  {
    key: '',
    link: Paths.notes,
    Component: Notes,
    icon: <NotesIcon />,
  },
  {
    key: '',
    link: Paths.settings,
    Component: Settings,
    icon: <SettingsIcon />,
  },
  {
    key: '',
    link: Paths.shopping,
    Component: Shopping,
    icon: <SettingsIcon />,
  },
  {
    key: '',
    link: Paths.tasks,
    Component: Tasks,
    icon: <TaskIcon />,
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
