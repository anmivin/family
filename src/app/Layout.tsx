import { ReactNode } from 'react';
import TaskForm from '@features/TaskForm/TaskForm';
import Header from '@ui/Header';
import BottomTabs from '@ui/BottomTabs';
import { Box } from '@mui/material';
import SkillForm from '@features/SkillForm/SkillForm';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <TaskForm />
      <SkillForm />
      <Box> {children}</Box>
      <BottomTabs />
    </>
  );
};

export default Layout;
