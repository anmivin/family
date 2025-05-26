import { Drawer, DrawerProps, Box, Typography, styled } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface DefaultDrawerProps<T extends FieldValues> extends Omit<DrawerProps, 'title'> {
  formMethods?: UseFormReturn<T>;
  footer?: ReactNode;
  title?: ReactNode;
  width?: string;
}

const StyledDrawer = styled(Drawer)<{ $paperWidth?: string }>`
  & .MuiDrawer-paper {
    padding: 20px;
    width: ${({ $paperWidth }) => $paperWidth ?? '100vw'};
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
  width,
  ...props
}: DefaultDrawerProps<T>) => {
  return (
    <FormProvider {...(formMethods as UseFormReturn)}>
      <StyledDrawer {...props} $paperWidth={width}>
        <Box display="flex" flexDirection="column" gap={6} sx={{ maxHeight: 'calc(100vh - 48px)', overflow: 'auto' }}>
          {typeof title === 'string' ? <Typography variant="h3">{title}</Typography> : title}
          {children}
        </Box>
        {footer}
      </StyledDrawer>
    </FormProvider>
  );
};

export default DefaultDrawer;
