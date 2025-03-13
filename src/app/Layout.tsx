import { ReactNode, useEffect } from 'react';
import TaskForm from '@features/TaskForm/TaskForm';
import LoginForm from '@features/LoginForm/LoginForm';
import Test from '@ui/Icons/Test';
import Header from '@ui/Header';
import BottomTabs from '@ui/BottomTabs';
import { Box } from '@mui/material';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <TaskForm />
      <Box> {children}</Box>
      <BottomTabs />
    </>
  );
};

export default Layout;
