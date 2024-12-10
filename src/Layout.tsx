import { ReactNode, useEffect } from 'react';

import { getRoutes } from './shared/constants/routes';
import Test from './shared/ui/Icons/Test';

import BottomTabs from './shared/ui/BottomTabs';

const Layout = ({ children }: { children: ReactNode }) => {
  /*   useEffect(() => {
    const storage = localStorage.getItem('routes');
    if (storage) return;
    localStorage.setItem(
      'routes',
      JSON.stringify([
        {
          key: Paths.menu,
          order: 1,
        },
        {
          key: Paths.character,
          order: 2,
        },
        {
          key: Paths.tasks,
          order: 3,
        },
        {
          key: Paths.settings,
          order: 4,
        },
      ])
    );
  }, []); */

  return (
    <>
      {/*       <Test /> */}
      {/*       <Box display="flex" flexDirection="row">
        {colos.map((col) => (
          <Box display="flex" flexDirection="column">
            {Object.values(col).map((c) => (
              <Box sx={{ backgroundColor: c, width: '100px', height: '50px' }} />
            ))}
          </Box>
        ))}
      </Box> */}
      <BottomTabs routes={getRoutes()} />

      {children}
    </>
  );
};

export default Layout;
