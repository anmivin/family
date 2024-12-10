import { ReactElement } from "react";
import Tasks from "../../pages/tasks";
import Menu from "../../pages/menu";
import Calendar from "../../pages/calendar";
import Character from "../../pages/character";
import Settings from "../../pages/settings";

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
interface RoutesProps {
  order: number;
  key: string;
  link: string;
  Component: () => ReactElement;
}

const menuRoutes: RoutesProps[] = [
  {
    order: 1,
    key: "",
    link: "",
    Component: Tasks,
  },
  {
    order: 1,
    key: "",
    link: "",
    Component: Menu,
  },
  {
    order: 1,
    key: "",
    link: "",
    Component: Calendar,
  },
  {
    order: 1,
    key: "",
    link: "",
    Component: Character,
  },
  {
    order: 1,
    key: "",
    link: "",
    Component: Settings,
  },
];

export default {
  menuRoutes,
  allRoutes: [...menuRoutes],
};
