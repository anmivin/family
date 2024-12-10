import { Box, IconButton, styled } from "@mui/material";

import { ReactNode } from "react";
const StyledMenu = styled(Box)`
  background-color: blue;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledMenu>
        <IconButton>Задачи</IconButton>
        <IconButton>Прогресс</IconButton>
        <IconButton>3</IconButton>
        <IconButton>4</IconButton>
      </StyledMenu>
      {children}
    </>
  );
};

export default Layout;
