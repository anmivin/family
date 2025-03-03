import { Box, Typography } from '@mui/material';
import { FormSectionProps } from './FormSection.types';
const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Box>
  );
};

export default FormSection;
