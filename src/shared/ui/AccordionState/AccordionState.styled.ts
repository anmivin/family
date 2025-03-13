import { styled, AccordionSummary } from '@mui/material';

export const StyledAccordionSummary = styled(AccordionSummary)`
  align-items: start;
  padding: ${({ theme }) => theme.spacing(2, 2, 1, 4)};
`;
