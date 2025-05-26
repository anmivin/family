import { PickerValidDate, PickersCalendarHeaderProps } from '@mui/x-date-pickers';

export interface ChangeIntervalProps {
  currentValue: string;
  changePrevInterval: () => void;
  changeNextInterval: () => void;
}
export interface CalendarHeaderProps<TDate extends PickerValidDate> extends PickersCalendarHeaderProps<TDate> {}
