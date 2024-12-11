import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTabsContainer = styled(Tabs)`
  background-color: ${({ theme }) => theme.color.primaryMain};

  & .MuiTabs-indicator {
    background: ${({ theme }) => theme.color.accentDark};
  }
  & .MuiTabs-flexContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledTab = styled(Tab)`
  padding: ${({ theme }) => theme.spacing(4, 2)};
  &.MuiButtonBase-root {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    height: ${({ theme }) => theme.spacing(9)};
    color: ${({ theme }) => theme.color.textMain};

    /*     &.Mui-selected {
      color: ${({ theme }) => theme.color.textLight};
    } */
    &.Mui-disabled {
      color: ${({ theme }) => theme.color.textLight};
    }
  }
`;
