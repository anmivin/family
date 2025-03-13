import { Accordion, AccordionDetails, Box, AccordionSummary } from '@mui/material';
import { useState } from 'react';
import { AccordionStateProps } from './AccordionState.types';
import { ChevronDownIcon } from '@ui/Icons';
import { StyledAccordionSummary } from './AccordionState.styled';
const AccordionState = ({ children, expandedNode, collapsedNode }: AccordionStateProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)}>
      <StyledAccordionSummary
        expandIcon={
          <Box sx={{ paddingTop: 2 }}>
            <ChevronDownIcon />
          </Box>
        }
      >
        {expanded ? expandedNode : collapsedNode}
      </StyledAccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionState;
