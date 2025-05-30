import { ReactNode } from 'react';
import { AccordionProps } from '@mui/material';
export interface AccordionStateProps extends Omit<AccordionProps, 'children'> {
  children: ReactNode;
  collapsedNode: ReactNode | string;
  expandedNode?: ReactNode;
}
