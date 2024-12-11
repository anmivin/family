import { TabProps as MuiTabProps } from '@mui/material/Tab';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';

interface ArrayOfTabs extends Partial<MuiTabProps> {
  label: string;
}

export interface TabsProps extends Omit<MuiTabsProps, 'onChange' | 'children'> {
  tabs: ArrayOfTabs[];
  onChange: (i: number) => void;
  children?: never;
}
