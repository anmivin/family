import { components, Difficulty, TaskStatus, TaskType } from '@shared/api/Api';
import { faker } from '@faker-js/faker';

const userTask: () => components['schemas']['OutputTaskDto'] & { id: string } = () => {
  const difficulty = faker.helpers.arrayElement(Object.values(Difficulty));
  const status = faker.helpers.arrayElement(Object.values(TaskStatus));
  const type = faker.helpers.arrayElement(Object.values(TaskType));
  return {
    id: faker.string.ulid(),
    title: faker.string.alpha({ length: { min: 3, max: 20 } }),
    difficulty,
    creator:
      Math.random() < 0.5
        ? {
            id: faker.string.uuid(),
            name: faker.string.alpha({ length: { min: 3, max: 20 } }),
          }
        : undefined,
    description: faker.string.alpha({ length: { min: 3, max: 150 } }),
    status,
    type,
    deadline: /*  Math.random() < 0.5 ?  */ faker.date.anytime().toISOString() /* : undefined */,
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
    id: 'feature_health',
    name: 'Здоровье',
    description: '',
    color: 'red',
    children: [
      {
        id: 'feature_mental_health',
        name: 'Ментальное здоровье',
        description: '',
        parentBrunchId: 'feature_health',
      },
      {
        id: 'feature_physical_health',
        name: 'Физическое здоровье',
        description: '',
        parentBrunchId: 'feature_health',
      },
    ],
  },

  {
    id: 'feature_social',
    name: 'Социализация',
    description: '',
    color: 'orange',
    children: [
      {
        id: 'feature_fun',
        name: 'Развлечения',
        description: '',
        parentBrunchId: 'feature_social',
      },
      {
        id: 'feature_networking',
        name: 'Связи',
        description: '',
        parentBrunchId: 'feature_social',
      },
      {
        id: 'feature_communication',
        name: 'Общение',
        description: '',
        parentBrunchId: 'feature_social',
      },
    ],
  },
  {
    id: 'feature_household',
    name: 'Хозяйство',
    description: '',
    color: 'yellow',
    children: [
      {
        id: 'feature_foraging',
        name: 'Собирательство',
        description: '',
        parentBrunchId: 'feature_household',
      },
      {
        id: 'feature_culinary',
        name: 'Кулинария',
        description: '',
        parentBrunchId: 'feature_household',
      },
      {
        id: 'feature_homekeeping',
        name: 'Домашнее хозяйство',
        description: '',
        parentBrunchId: 'feature_household',
      },
    ],
  },
  {
    id: 'feature_art',
    name: 'Искусство',
    description: '',
    color: 'green',
    children: [
      {
        id: 'feature_fine_arts',
        name: 'Изобразительное искусство',
        description: '',
        parentBrunchId: 'feature_art',
      },
      {
        id: 'feature_applied_arts',
        name: 'Прикладное искусство',
        description: '',
        parentBrunchId: 'feature_art',
      },
      {
        id: 'feature_performing_arts',
        name: 'Исполнительское искусство',
        description: '',
        parentBrunchId: 'art',
      },
      {
        id: 'feature_culture',
        name: 'Культура',
        description: '',
        parentBrunchId: 'feature_art',
      },
    ],
  },

  {
    id: 'feature_science',
    name: 'Науки',
    description: '',
    color: 'blue',
    parentBrunchId: '0',
    children: [
      {
        id: 'feature_human_science',
        name: 'Гуманитарные науки',
        description: '',
        parentBrunchId: 'feature_science',
      },
      {
        id: 'feature_technical_science',
        name: 'Технические науки',
        description: '',
        parentBrunchId: 'feature_science',
      },
      {
        id: 'feature_languages',
        name: 'Иностранные языки',
        description: '',
        parentBrunchId: 'feature_science',
      },
      {
        id: 'feature_erudition',
        name: 'Эрудиция',
        description: '',
        parentBrunchId: 'feature_science',
      },
    ],
  },
  {
    id: 'feature_beauty',
    name: 'Красота',
    description: '',
    color: 'violet',
    parentBrunchId: '0',
    children: [
      {
        id: 'feature_body',
        name: 'Тело',
        description: '',
        parentBrunchId: 'feature_beauty',
      },
      {
        id: 'feature_aethetic',
        name: 'Эстетика',
        description: '',
        parentBrunchId: 'feature_beauty',
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

export const selectedSkill: (id: string) => components['schemas']['OutputSkillDto'] | null = (id: string) => {
  const foundSkill = userSkills().find((task) => task.id === id);
  if (!foundSkill) return null;
  const featuresIds = features.flatMap((feat) => feat.children.map((f) => f.id));
  return {
    ...foundSkill,
    description: /* Math.random() < 0.5 ?  */ faker.string.alpha() /*  : undefined */,
    features: faker.helpers.multiple(() => ({
      id: faker.helpers.arrayElement(featuresIds),
      percent: faker.number.int({ max: 100, min: 0 }),
    })),
  };
};
