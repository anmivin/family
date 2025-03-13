import { DateCalendar, PickersDayProps, PickerValidDate } from '@mui/x-date-pickers';
import { Box, styled, IconButton, Typography } from '@mui/material';
import { getDate, getDefaultDate } from '@helpers/dates';

import { useState } from 'react';

import { PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { addMonths } from 'date-fns';

const StyledCalendar = styled(DateCalendar)`
  width: 100%;

  &.MuiDateCalendar-root {
    height: 100%;
    max-height: unset;
  }

  .MuiDayCalendar-weekDayLabel,
  .MuiPickersDay-root {
    background: red;
    width: calc(100% / 7);
    color: ${({ theme }) => theme.color.red100};
  }

  .MuiDayCalendar-monthContainer {
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;
const DayContainer = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1)};
  background: ${({ theme }) => theme.color.yellow100};
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.color.blue300};
  &:hover {
    background: ${({ theme }) => theme.color.red400};
  }
  &.disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.red200};
    &:hover {
      background: ${({ theme }) => theme.color.yellow100};
    }
  }
`;

const TaskContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
`;

const TaskItem = styled(Box)`
  width: 90%;
  padding: 4px;
  text-align: end;
  color: black;
  border-radius: 4px;
  background: ${({ theme }) => `linear-gradient(50deg, ${theme.color.red100}, ${theme.color.red400})`};
`;

const CalendarHeader = <TDate extends PickerValidDate>(props: PickersCalendarHeaderProps<TDate>) => {
  const handlePrevMonth = () => {
    const prevDate = addMonths(props.currentMonth, -1) as TDate;
    props.onMonthChange(prevDate, 'right');
  };

  const handleNextMonth = () => {
    const nextDate = addMonths(props.currentMonth, 1) as TDate;
    props.onMonthChange(nextDate, 'left');
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton onClick={handlePrevMonth}>{'<'}</IconButton>
      <Typography>{getDefaultDate(props.currentMonth)}</Typography>
      <IconButton onClick={handleNextMonth}>{'>'}</IconButton>
    </Box>
  );
};

const Day = <T extends PickerValidDate>(props: PickersDayProps<T>) => {
  const dayData = [{ type: 'dddd' }, { type: 'sss' }, { type: 'sss' }, { type: 'sss' }];
  return (
    <DayContainer className={props.outsideCurrentMonth ? 'disabled' : undefined}>
      <Box display="block">
        <Box sx={{ position: 'relative', top: '0px', left: '0px' }}>{getDate(props.day)}</Box>
        <TaskContainer>
          {dayData.slice(0, dayData.length > 3 ? 2 : 3).map((info) => (
            <TaskItem>{info.type}</TaskItem>
          ))}
          {dayData.length > 3 && <>+{dayData.length - 2}</>}
        </TaskContainer>
      </Box>
    </DayContainer>
  );
};

const Calendar = () => {
  const [selected, setSelected] = useState<{ id: string; name: string; type: string; date: string }[]>([]);
  /*   const { data } = useSwr({
      key: 'calendar',
      func: () => axios.get('/calendar').then((res) => res.data),
    }); */

  return (
    <>
      <StyledCalendar slots={{ day: (props) => Day(props /* setSelected, data */), calendarHeader: CalendarHeader }} />

      {selected.map((sel) => (
        <Box>{sel.type}</Box>
      ))}
    </>
  );
};

export default Calendar;
