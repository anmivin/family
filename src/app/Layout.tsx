import { ReactNode } from 'react';
import TaskForm from '@features/TaskForm/TaskForm';
import Header from '@ui/Header';
import BottomTabs from '@ui/BottomTabs';
import { Box } from '@mui/material';
import SkillForm from '@features/SkillForm/SkillForm';
import MenuDrawer from '@features/MenuDrawer/MenuDrawer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <TaskForm />
      <SkillForm />
      <MenuDrawer />
      <Box sx={{ pt: 14, pb: 10 }}> {children}</Box>
      <BottomTabs />
    </>
  );
};

export default Layout;
