import { PickerValidDate } from '@mui/x-date-pickers';

import { getMonthYear } from '@helpers/dates';
import ChangeInterval from './ChangeInterval';
import { addMonths } from 'date-fns';

import { CalendarHeaderProps } from './CalendarHeader.types';

const CalendarHeader = <T extends PickerValidDate>(props: CalendarHeaderProps<T>) => {
  const handlePrevMonth = () => {
    const prevDate = addMonths(props.currentMonth, -1) as T;
    props.onMonthChange(prevDate, 'right');
  };

  const handleNextMonth = () => {
    const nextDate = addMonths(props.currentMonth, 1) as T;
    props.onMonthChange(nextDate, 'left');
  };

  return (
    <ChangeInterval
      currentValue={getMonthYear(props.currentMonth)}
      changePrevInterval={handlePrevMonth}
      changeNextInterval={handleNextMonth}
    />
  );
};

export default CalendarHeader;
