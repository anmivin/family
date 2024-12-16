import {
  HammerIcon,
  AcademicCapIcon,
  NotebookIcon,
  PaletteIcon,
  MeditationIcon,
  GlobusIcon,
  CodeIcon,
  ChiefHatIcon,
} from '@ui/Icons';

export const characteristics = [
  {
    id: 'Health',
    name: 'Здоровье',
    dedcription: '',
    color: 'red300',
    icon: '',
    branches: [
      { name: 'Физическое здоровье', id: '', icon: '', traits: ['Зож, медицина', ''] },
      {
        name: 'Ментальное здоровье',
        id: '',
        icon: <MeditationIcon />,
        traits: ['Медитация, Духовность', ''],
      },
    ],
  },
  {
    id: 'Science',
    name: 'Науки',
    dedcription: '',
    color: 'blue300',
    icon: <AcademicCapIcon />,
    branches: [
      { name: 'Гуманитарные науки', icon: <GlobusIcon />, id: '', traits: ['', ''] },
      {
        name: 'Технические науки',
        icon: <CodeIcon />,
        id: '',
        traits: ['Программирование'],
      },
      { name: 'Ин яз', icon: '', id: '', traits: 'Иврит' },
    ],
  },
  {
    id: 'Art',
    name: 'Искусство',
    dedcription: '',
    color: 'green300',
    icon: <PaletteIcon />,
    branches: [
      { name: 'Творчество', id: '', icon: '', traits: ['Рисование', 'Писательство', 'Скрипка'] },
      { name: 'Культура', id: '', icon: <NotebookIcon />, traits: ['Кино'] },
      { name: '', traits: '' },
    ],
  },
  {
    id: 'Household',
    name: 'Хозяйство',
    dedcription: '',
    color: 'yellow300',
    icon: '',
    branches: [
      { name: 'Собирательство', icon: '', id: '', traits: ['Грибничество', 'травничество'] },
      { name: 'Кулинария', icon: <ChiefHatIcon />, id: '', traits: ['', '', ''] },
      { name: 'Садоводство', icon: '', traits: '' },
      {
        name: 'Ремесло',
        icon: <HammerIcon />,
        id: '',
        traits: 'Вязание, Плотник, Сантехника, электроника, шитьё;',
      },
      { name: 'Выживание', icon: '', id: '', traits: 'уборка' },
    ],
  },
  {
    id: 'Beauty',
    name: 'Красота',
    dedcription: '',
    color: 'pink300',
    icon: '',
    branches: [
      { name: 'Тело', icon: '', id: '', traits: ['Ловкость, Сила, Гибкость, Выносливость;', ''] },
      { name: '', icon: '', id: '', traits: [''] },
    ],
  },
  {
    id: 'Social',
    name: 'Социализация',
    dedcription: '',
    color: 'orange300',
    icon: '',
    branches: [
      { name: '', icon: '', id: '', traits: ['', ''] },
      { name: '', icon: '', id: '', traits: [''] },
    ],
  },
];
