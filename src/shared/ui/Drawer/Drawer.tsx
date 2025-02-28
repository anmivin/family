import { Drawer, DrawerProps, Box, Typography, styled } from '@mui/material';
import { ReactNode } from 'react';

interface DefaultDrawerProps extends Omit<DrawerProps, 'title'> {
  footer?: ReactNode;
  title?: ReactNode;
}

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    padding: 20px;
    width: 100vw;
    background-color: ${({ theme }) => theme.color.primaryLight};
    display: flex;
    flex-derection: column;
    justify-content: space-between;
    overflow-y: auto;
    gap: 20px;
  }
`;

const DefaultDrawer = ({ footer, title, children, ...props }: DefaultDrawerProps) => {
  return (
    <StyledDrawer {...props}>
      <Box display="flex" flexDirection="column" gap={4}>
        {typeof title === 'string' ? <Typography variant="h3">{title}</Typography> : title}
        {children}
      </Box>
      {footer}
    </StyledDrawer>
  );
};

export default DefaultDrawer;
