import { FC } from 'react';

import { StyledTab, StyledTabsContainer } from './Tabs.styled';

import { TabsProps } from './Tabs.types';

const Tabs: FC<TabsProps> = ({ children, tabs, onChange, ...rest }) => {
  return (
    <StyledTabsContainer role="tablist" {...rest} variant="scrollable" scrollButtons={false}>
      {children
        ? children
        : tabs?.map((tab) => (
            <StyledTab key={tab.label} value={tab.value} onClick={() => onChange(tab.value)} {...tab} />
          ))}
    </StyledTabsContainer>
  );
};

export default Tabs;
