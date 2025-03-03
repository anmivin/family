import { differenceInDays } from 'date-fns';
import { ReactNode } from 'react';
import { StarOneIcon, StarTwoIcon, StarThreeIcon, StarFourIcon, StarFiveIcon } from '@ui/Icons';

export enum TaskDifficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
  Epic = 'Epic',
  Legendary = 'Legendary',
}

/* Easy (10 XP)

Make a to-do list for the day
Start a conversation with a stranger in a coffee shop
Share a funny meme or joke with a friend
Create a short video or GIF for social media
Write a short poem or song lyrics
Attend a local art exhibit or gallery opening


Simple (20 XP)

Cook a simple meal (e.g. scrambled eggs, grilled cheese)
Take a shower
Brush and floss your teeth
Take a short power nap (15-30 minutes)
Read a chapter in a book
Do a load of laundry
Plan a game night with friends
Learn a new board game or card game
Start a book club or discussion group
Attend a local concert or music event
Share a personal story or experience with a friend

Medium (50 XP)

Clean the bathroom sink and toilet
Wipe down the kitchen table and chairs
Mop the floors
Vacuum the living room
Take a walk around the neighborhood (30 minutes)
Practice yoga or meditation (30 minutes)
Plan a weekend getaway with friends
Learn a new dance style or routine
Start a photography project or album
Attend a writing workshop or conference
Create a new recipe or cooking challenge

Challenging (200 XP)

n and execute a large-scale event or festival (e.g. a music festival, a cultural celebration)
Learn a new language or dialect (e.g. a regional accent, a sign language)
Start a podcast or YouTube channel
Create a comprehensive art portfolio or exhibition
Plan and execute a charity event or fundraiser

Hard (400 XP)

Plan and prep a healthy meal for the week
Organize a cluttered closet or room
Take a relaxing walk in nature (60 minutes)
Practice a new language or skill (e.g. 1 hour of language learning)
Write in a journal or reflect on your day (30 minutes)
Plan and execute a major art project or installation
Learn a new musical instrument or compose original music
Start a non-profit organization or community project
Create a comprehensive book or e-book
Plan and execute a large-scale public art event

Exceptional (500 XP)

Complete a challenging artistic or creative project (e.g. a sculpture, a painting)
Learn a new skill or trade (e.g. woodworking, metalworking)
Start a successful business or startup
Create a comprehensive documentary or film
Plan and execute a large-scale cultural event or festival

Epic (800 XP)

Complete a legendary artistic or creative project (e.g. a masterpiece, a world-renowned installation)
Learn a new language or skill that takes years to master (e.g. becoming a fluent speaker, a master craftsman)
Start a successful non-profit organization or community project
Create a comprehensive and widely acclaimed book or e-book
Plan and execute a large-scale and historic event or festival

Legendary (1000 XP)
Start a successful and influential business or startup
Create a comprehensive and widely acclaimed documentary or film

*/

export const TaskDifficultyXP: Record<
  TaskDifficulty,
  { xp: number; label: string; time: number; examples: string[]; icon: ReactNode }
> = {
  [TaskDifficulty.Easy]: {
    xp: 20,
    label: 'Лёгкая',
    time: 5,
    examples: [
      'Пройтись вокруг дома',
      'Размяться',
      'Проверить почту',
      'Протереть столы',
      'Развесить белье',
      'Помыть посуду',
    ],
    icon: <StarOneIcon size={48} />,
  },
  [TaskDifficulty.Medium]: {
    xp: 60,
    label: 'Средняя',
    time: 20,
    examples: ['Помыть полы', 'Прочитать главу', 'Прогулка', 'Йога или медитация', 'Приготовить еду'],
    icon: <StarTwoIcon size={48} />,
  },

  [TaskDifficulty.Hard]: {
    xp: 180,
    label: 'Сложная',
    time: 80,
    examples: [
      'Приготовить меню на неделю',
      'Разобрать гардероб',
      'Час практиковаться в языке',
      'Генеральная уборка',
      'Тренировка в спортзале',
      'Прочитать книгу',
      'Приготовить новое блюдо',
      'Plan a romantic evening with a partner',
      'Complete a complex task in a project (e.g. a multi-step task)',
    ],
    icon: <StarThreeIcon size={48} />,
  },
  [TaskDifficulty.Epic]: {
    xp: 540,
    label: 'Эпичная',
    time: 0,
    examples: [
      'Host a dinner party for friends or family',
      'Complete a difficult workout routine (e.g. a marathon, a challenging hike)',
      'Read a whole series of books in a short amount of time',
      'Plan and execute a big project or event (e.g. a wedding, a move)',
      'Take a week-long trip or vacation',
    ],
    icon: <StarFourIcon size={48} />,
  },
  [TaskDifficulty.Legendary]: {
    xp: 1620,
    label: 'Легендарная',
    time: 0,
    examples: [
      'Спланировать и претворить в жизнь изменение в жизни',
      'Создать произведение искусства',
      'Путешествие в новую страну',
      'Редекорировать дом',
      'Learn a new skill or hobby (e.g. playing an instrument, painting)',
    ],
    icon: <StarFiveIcon size={48} />,
  },
};

const XP_BASE = 100;

export const calcXpPerLevel = (level: number) => XP_BASE * Math.pow(level, 2);
export const calcLevel = (xp: number) => Math.floor(Math.sqrt(xp / 100));
export const calcEarnedXp = (difficulty: TaskDifficulty, prevEarnedXP: Date) => {
  const XP_RATE_BASE = TaskDifficultyXP[difficulty].xp;
  const TIME_PASSED = differenceInDays(new Date(), prevEarnedXP) / 10;
  const XP_MULTIPLIER = 1 - TIME_PASSED;
  return XP_RATE_BASE * (XP_MULTIPLIER < 0.25 ? 0.25 : XP_MULTIPLIER);
};
