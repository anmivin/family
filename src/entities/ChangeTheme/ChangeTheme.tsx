import { themeColor } from '@shared/theme/color';
import { ThemeName } from '@shared/theme/theme.constants';
import { Box } from '@mui/material';
import { ColorModeContext } from '@shared/theme/theme.provider';
import { useContext } from 'react';

const ChangeTheme = () => {
  const { mode, changeColorMode } = useContext(ColorModeContext);
  return (
    <Box display="flex" flexWrap="wrap" gap={4}>
      {Object.keys(themeColor).map((item, index) => (
        <Box
          key={index}
          onClick={() => changeColorMode(item as ThemeName)}
          sx={{
            cursor: 'pointer',
            borderRadius: '12px',
            width: '50px',
            height: '50px',
            border: mode === item ? '2px solid white' : '1px solid black',
            background: `linear-gradient(90deg, ${themeColor[item as ThemeName].primaryMain} 25%, ${
              themeColor[item as ThemeName].secondaryMain
            } 25%, ${themeColor[item as ThemeName].secondaryMain} 75%, ${
              themeColor[item as ThemeName].accentMain
            } 75%)`,
          }}
        />
      ))}
    </Box>
  );
};

export default ChangeTheme;
