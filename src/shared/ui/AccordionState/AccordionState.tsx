import { Accordion, AccordionDetails, Box, AccordionSummary, Typography } from '@mui/material';
import { useState } from 'react';
import { AccordionStateProps } from './AccordionState.types';
import { ChevronDownIcon } from '@ui/Icons';
import { StyledAccordionSummary, StyledAccordionDetails } from './AccordionState.styled';
const AccordionState = ({ children, expandedNode, collapsedNode }: AccordionStateProps) => {
  const [expanded, setExpanded] = useState(false);
  const collapsed =
    typeof collapsedNode === 'string' ? <Typography variant="h6">{collapsedNode}</Typography> : collapsedNode;
  return (
    <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)}>
      <StyledAccordionSummary
        expandIcon={
          <Box sx={{ paddingTop: 2 }}>
            <ChevronDownIcon />
          </Box>
        }
      >
        {expanded && expandedNode ? expandedNode : collapsed}
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </Accordion>
  );
};

export default AccordionState;
