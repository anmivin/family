import { components } from '@api/Api';
import { faker } from '@faker-js/faker';

const userTask: () => components['schemas']['OutputTaskDto'] & { id: string } = () => {
  const difficulty = faker.helpers.arrayElement(['Easy', 'Medium', 'Hard', 'Epic', 'Legendary']);
  return {
    id: faker.string.ulid(),
    name: faker.string.alpha({ length: { min: 3, max: 20 } }),
    difficulty: difficulty,
    creatorId: Math.random() < 0.5 ? faker.string.uuid() : undefined,
    description: faker.string.alpha({ length: { min: 3, max: 150 } }),

    isActive: Math.random() < 0.5 ? faker.datatype.boolean() : undefined,
    isCompleted: Math.random() < 0.5 ? faker.datatype.boolean() : undefined,
    isApproving: Math.random() < 0.5 ? faker.datatype.boolean() : undefined,
    isDeclined: Math.random() < 0.5 ? faker.datatype.boolean() : undefined,
    isHabit: Math.random() < 0.5 ? faker.datatype.boolean() : undefined,

    date: Math.random() < 0.5 ? faker.date.anytime().toISOString() : undefined,
    skills: faker.helpers.multiple(() => ({
      id: faker.string.uuid(),
      percent: faker.number.int({ min: 0, max: 100 }),
    })),
    features: faker.helpers.multiple(() => ({
      id: faker.string.uuid(),
      percent: faker.number.int({ min: 0, max: 100 }),
    })),
  };
};

export const userTasks = faker.helpers.multiple(userTask, { count: 20 });
export const selectedTask = (id: string) => {
  return userTasks.find((task) => task.id === id);
};

export const randomUser: () => components['schemas']['OutputUserDto'] = () => {
  return {
    id: faker.string.uuid(),
    name: faker.string.alpha({ length: { min: 3, max: 20 } }),
    email: faker.internet.exampleEmail(),
    xp: faker.number.int({ min: 0, max: 10000 }),
    gold: faker.number.int({ min: 0, max: 10000 }),
    familyId: faker.string.uuid(),
  };
};

const features = [
  {
    id: 'health',
    name: 'Здоровье',
    description: '',
    color: 'red',
    children: [
      {
        id: 'mental_health',
        name: 'Ментальное здоровье',
        description: '',
        parentBrunchId: 'health',
      },
      {
        id: 'physical_health',
        name: 'Физическое здоровье',
        description: '',
        parentBrunchId: 'health',
      },
    ],
  },

  {
    id: 'social',
    name: 'Социализация',
    description: '',
    color: 'orange',
    children: [
      {
        id: 'fun',
        name: 'Развлечения',
        description: '',
        parentBrunchId: 'social',
      },
      {
        id: 'networking',
        name: 'Связи',
        description: '',
        parentBrunchId: 'social',
      },
      {
        id: 'communication',
        name: 'Общение',
        description: '',
        parentBrunchId: 'social',
      },
    ],
  },
  {
    id: 'household',
    name: 'Хозяйство',
    description: '',
    color: 'yellow',
    children: [
      {
        id: 'foraging',
        name: 'Собирательство',
        description: '',
        parentBrunchId: 'household',
      },
      {
        id: 'culinary',
        name: 'Кулинария',
        description: '',
        parentBrunchId: 'household',
      },
      {
        id: 'homekeeping',
        name: 'Домашнее хозяйство',
        description: '',
        parentBrunchId: 'household',
      },
    ],
  },
  {
    id: 'art',
    name: 'Искусство',
    description: '',
    color: 'green',
    children: [
      {
        id: 'fine_arts',
        name: 'Изобразительное искусство',
        description: '',
        parentBrunchId: 'art',
      },
      {
        id: 'applied_arts',
        name: 'Прикладное искусство',
        description: '',
        parentBrunchId: 'art',
      },
      {
        id: 'performing_arts',
        name: 'Исполнительское искусство',
        description: '',
        parentBrunchId: 'art',
      },
      {
        id: 'culture',
        name: 'Культура',
        description: '',
        parentBrunchId: 'art',
      },
    ],
  },

  {
    id: 'science',
    name: 'Науки',
    description: '',
    color: 'blue',
    parentBrunchId: '0',
    children: [
      {
        id: 'human_science',
        name: 'Гуманитарные науки',
        description: '',
        parentBrunchId: 'science',
      },
      {
        id: 'technical_science',
        name: 'Технические науки',
        description: '',
        parentBrunchId: 'science',
      },
      {
        id: 'languages',
        name: 'Иностранные языки',
        description: '',
        parentBrunchId: 'science',
      },
      {
        id: 'erudition',
        name: 'Эрудиция',
        description: '',
        parentBrunchId: 'science',
      },
    ],
  },
  {
    id: 'beauty',
    name: 'Красота',
    description: '',
    color: 'violet',
    parentBrunchId: '0',
    children: [
      {
        id: 'body',
        name: 'Тело',
        description: '',
        parentBrunchId: 'beauty',
      },
      {
        id: 'aethetic',
        name: 'Эстетика',
        description: '',
        parentBrunchId: 'beauty',
      },
    ],
  },
];

export const featureList: () => components['schemas']['FeatureDto'][] = () => {
  return features.map((feature) => {
    const children = feature.children.map((child) => ({ ...child, userXp: faker.number.int({ min: 0, max: 10000 }) }));
    return { ...feature, children, userXp: children.reduce((sum, child) => sum + child.userXp, 0) };
  });
};

export const skills = faker.helpers.multiple(
  () => ({
    id: faker.string.uuid(),
    name: faker.string.alpha({ length: { min: 3, max: 15 } }),
  }),
  { count: 15 }
);

export const userSkills: () => components['schemas']['SkillXpDto'][] = () => {
  return skills.map((ski) => ({ ...ski, xp: faker.number.int({ min: 0, max: 1000 }) }));
};
