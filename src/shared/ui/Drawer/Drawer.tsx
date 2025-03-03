import { Drawer, DrawerProps, Box, Typography, styled } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface DefaultDrawerProps<T extends FieldValues> extends Omit<DrawerProps, 'title'> {
  formMethods: UseFormReturn<T>;
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

const DefaultDrawer = <T extends FieldValues>({
  footer,
  title,
  children,
  formMethods,
  ...props
}: DefaultDrawerProps<T>) => {
  return (
    <FormProvider {...formMethods}>
      <StyledDrawer {...props}>
        <Box display="flex" flexDirection="column" gap={6}>
          {typeof title === 'string' ? <Typography variant="h3">{title}</Typography> : title}
          {children}
        </Box>
        {footer}
      </StyledDrawer>
    </FormProvider>
  );
};

export default DefaultDrawer;
