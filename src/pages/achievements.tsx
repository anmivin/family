import { Box, Button } from '@mui/material';
import { useToast } from '@ui/Toast/ToastProvider';
import * as icons from '@ui/Icons';
const Achievements = () => {
  const { successToast, errorToast, infoToast, warningToast } = useToast();

  const commonColors = {
    red: {
      red100: '#FFE6D6',
      red200: '#FFC6AE',
      red300: '#FF8B71',
      red400: '#FF5040',
      red500: '#E63946',
    },
    orange: {
      orange100: '#FFF3E0',
      orange200: '#FFE1C1',
      orange300: '#FFC999',
      orange400: '#FFA500',
      orange500: '#CC7722',
    },
    yellow: {
      yellow100: '#FFFCCF',
      yellow200: '#FFF89F',
      yellow300: '#FFEE6F',
      yellow400: '#FFD700',
      yellow500: '#D4AF37',
    },
    green: {
      green100: '#E6F3EA',
      green200: '#CCE6D0',
      green300: '#A3D2A8',
      green400: '#5DA871',
      green500: '#3B755F',
    },
    teal: {
      teal100: '#E0F7FA',
      teal200: '#B2DFDB',
      teal300: '#80CBC4',
      teal400: '#4DB6AC',
      teal500: '#008080',
    },
    blue: {
      blue100: '#E3F2FD',
      blue200: '#BBDEFB',
      blue300: '#64B5F6',
      blue400: '#42A5F5',
      blue500: '#1565C0',
    },
    purple: {
      purple100: '#F3E5F5',
      purple200: '#E1BEE7',
      purple300: '#BA68C8',
      purple400: '#AB47BC',
      purple500: '#7B1FA2',
    },
    gray: {
      gray100: '#F5F5F5',
      gray200: '#EEEEEE',
      gray300: '#E0E0E0',
      gray400: '#BDBDBD',
      gray500: '#9E9E9E',
      gray600: '#757575',
      gray700: '#616161',
      gray800: '#424242',
      gray900: '#212121',
      black: '#000000',
      white: '#FFFFFF',
    },

    neutrals: {
      light100: '#FFFFFF',
      light200: '#F9F9F9',
      light300: '#F0F0F0',
      light400: '#E6E6E6',
      light500: '#D9D9D9',
      dark100: '#111111',
      dark200: '#222222',
      dark300: '#333333',
      dark400: '#444444',
      dark500: '#555555',
    },
    textColors: {
      primary: '#1A1A1A',
      secondary: '#666666',
      disabled: '#999999',
      onDarkPrimary: '#FFFFFF',
      onDarkSecondary: '#AAAAAA',
    },
  };

  // 🏰 Theme-Specific Color Palettes
  const themePalettes = {
    babushkaHearth: {
      primary: '#B85B1E', // Maple Orange
      secondary: '#F2C47E', // Golden Wheat
      accent: '#5A7F5A', // Forest Green
      neutralLight: '#FFF3E0',
      neutralMid: '#F5E6DA',
      neutralDark: '#A17857',
      textPrimary: '#1A1A1A',
      textSecondary: '#666666',
    },
    tsaristGold: {
      primary: '#2A3F6E', // Royal Blue
      secondary: '#FFD700', // Gilded Gold
      accent: '#9E1B34', // Crimson Red
      neutralLight: '#FFFFF0',
      neutralMid: '#F9F4E8',
      neutralDark: '#4A4A4A',
      textPrimary: '#111111',
      textSecondary: '#666666',
    },
    sovietMinimal: {
      primary: '#333333', // Stark Gray
      secondary: '#C91F37', // Industrial Red
      accent: '#FFD700', // Warning Yellow
      neutralLight: '#F2F2F2',
      neutralMid: '#D9D9D9',
      neutralDark: '#333333',
      textPrimary: '#000000',
      textSecondary: '#777777',
    },
    forestSpirit: {
      primary: '#228B22', // Forest Green
      secondary: '#A8C3A1', // Soft Moss
      accent: '#FFBF00', // Amber Yellow
      neutralLight: '#F8F4E3',
      neutralMid: '#E8E2D9',
      neutralDark: '#5C4D3D',
      textPrimary: '#1A1A1A',
      textSecondary: '#666666',
    },
    midnightCastle: {
      primary: '#2E1B3B', // Dark Purple
      secondary: '#C0C6D4', // Moonlight Silver
      accent: '#8B0000', // Blood Red
      neutralLight: '#E6E6E6',
      neutralMid: '#CCCCCC',
      neutralDark: '#1A1A1A',
      textPrimary: '#FFFFFF',
      textSecondary: '#AAAAAA',
    },
    sunriseMotivator: {
      primary: '#FFA500', // Bright Orange
      secondary: '#87CEEB', // Sky Blue
      accent: '#FF69B4', // Hot Pink
      neutralLight: '#FFFFFF',
      neutralMid: '#F9F9F9',
      neutralDark: '#333333',
      textPrimary: '#000000',
      textSecondary: '#777777',
    },
    candyChaos: {
      primary: '#FF66CC', // Electric Pink
      secondary: '#008080', // Teal Pop
      accent: '#7FFF00', // Neon Lime
      neutralLight: '#FFFACD',
      neutralMid: '#FFE5F5',
      neutralDark: '#5A2A66',
      textPrimary: '#2A0040',
      textSecondary: '#996699',
    },
    arcticChill: {
      primary: '#A8DADC', // Ice Blue
      secondary: '#76787A', // Steel Gray
      accent: '#E63946', // Arctic Red
      neutralLight: '#F0F4F8',
      neutralMid: '#DDE6ED',
      neutralDark: '#333F48',
      textPrimary: '#000000',
      textSecondary: '#777777',
    },
    autumnHarvest: {
      primary: '#B85B1E', // Burnt Orange
      secondary: '#F2C47E', // Maple Brown
      accent: '#A0522D', // Spiced Red
      neutralLight: '#F5DEB3',
      neutralMid: '#EEDDBB',
      neutralDark: '#7B5B3E',
      textPrimary: '#222222',
      textSecondary: '#666666',
    },
    pixelLegends: {
      primary: '#3B755F', // Game Boy Green
      secondary: '#4A789C', // CRT Blue
      accent: '#FF3333', // Pixel Red
      neutralLight: '#F0F0F0',
      neutralMid: '#CCCCCC',
      neutralDark: '#111111',
      textPrimary: '#FFFFFF',
      textSecondary: '#999999',
    },
    darkModeFinalFrontier: {
      primary: '#121212', // Deep Space Black
      secondary: '#7F00FF', // Electric Indigo
      accent: '#FF6F61', // Digital Coral
      neutralLight: '#1E1E1E',
      neutralMid: '#2D2D2D',
      neutralDark: '#111111',
      textPrimary: '#FFFFFF',
      textSecondary: '#AAAAAA',
    },
    teaTidy: {
      primary: '#BCD2B0', // Sage Green
      secondary: '#F8EED2', // Cream Tea
      accent: '#8E2541', // Damson Plum
      neutralLight: '#FAF9F6',
      neutralMid: '#F5F1EC',
      neutralDark: '#5A3E36',
      textPrimary: '#1A1A1A',
      textSecondary: '#666666',
    },
    theLostSock: {
      primary: '#4D4D4D', // Smoky Gray
      secondary: '#F2F2F2', // Off-White
      accent: '#FFA000', // Sock Orange
      neutralLight: '#EAEAEA',
      neutralMid: '#D0D0D0',
      neutralDark: '#333333',
      textPrimary: '#111111',
      textSecondary: '#777777',
    },
  };
  return (
    <Box>
      <Button onClick={() => successToast('jkskjfsksfs', { content: 'LOREM lorem lorem lorem' })}>suc</Button>
      <Button onClick={() => errorToast('jkskjfsksfs')}>err</Button>
      <Button onClick={() => infoToast('jkskjfsksfs')}>info</Button>
      <Button onClick={() => warningToast('jkskjfsksfs')}>warn</Button>
      <Box display="flex" flexDirection="row">
        табы достпные\востребованные
      </Box>
      <Box display="flex" flexDirection="row" sx={{ p: 6, background: 'white' }}>
        {Object.values(themePalettes).map((color) => (
          <Box display="flex" flexDirection="column" width="60px">
            {Object.values(color).map((vari) => (
              <Box sx={{ height: '40px', backgroundColor: vari }} />
            ))}
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="row" sx={{ p: 6, background: 'white' }}>
        {Object.values(commonColors).map((color) => (
          <Box display="flex" flexDirection="column" width="60px">
            {Object.values(color).map((vari) => (
              <Box sx={{ height: '40px', backgroundColor: vari }} />
            ))}
          </Box>
        ))}
      </Box>
      <icons.AcademicCapIcon />
      <icons.BurgerIcon />
      <icons.CalendarIcon />
      <icons.CharacterIcon />
      <icons.CharacterIcon />
      <icons.ChevronDownIcon />
      <icons.ChevronLeftIcon />
      <icons.ChevronRightIcon />
      <icons.ChevronUpIcon />
      <icons.ChiefHatIcon />
      <icons.ClockIcon />
      <icons.CodeIcon />
      <icons.CoinIcon />
      <icons.ConfettiIcon />
      <icons.CrossIcon />
      <icons.CrownIcon />
      <icons.DialogBulbIcon />
      <icons.DumbbellIcon />
      <icons.FireIcon />
      <icons.FridgeIcon />
      <icons.GarageIcon />
      <icons.GlobusIcon />
      <icons.HammerIcon />
      <icons.HeartPlusIcon />
      <icons.HomeIcon />
      <icons.LeafIcon />
      <icons.MasksIcon />
      <icons.MedalIcon />
      <icons.MeditationIcon />
      <icons.MirrorIcon />
      <icons.MusicNoteIcon />
      <icons.NotebookIcon />
      <icons.NotesIcon />
      <icons.PaletteCardsIcon />
      <icons.PaletteIcon />
      <icons.PlusIcon />
      <icons.RepeatIcon />
      <icons.RulePencilIcon />
      <icons.SettingsIcon />
      <icons.ShakehandIcon />
      <icons.ShareCircleIcon />
      <icons.ShoppingBasketIcon />
      <icons.StarFiveIcon />
      <icons.StarFourIcon />
      <icons.StarOneIcon />
      <icons.StarRainbowIcon />
      <icons.StarThreeIcon />
      <icons.StarTwoIcon />
      <icons.TaskIcon />
      <icons.ThermometrIcon />
      <icons.TrashIcon />
      <icons.TrophyCapIcon />
      <icons.TwoHeartsIcon />
      <icons.UserGroupIcon />
      <icons.UserGroupIcon />
    </Box>
  );
};

export default Achievements;
