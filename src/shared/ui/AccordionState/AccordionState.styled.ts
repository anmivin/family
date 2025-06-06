import { styled, AccordionSummary, AccordionDetails } from '@mui/material';

export const StyledAccordionSummary = styled(AccordionSummary)`
  align-items: start;
  padding: ${({ theme }) => theme.spacing(2, 2, 1, 4)};
  background: ${({ theme }) => theme.color.primaryMain};
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.color.primaryMain};
`;
