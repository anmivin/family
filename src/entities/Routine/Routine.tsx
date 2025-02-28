import {
  addDays,
  addMonths,
  addQuarters,
  addWeeks,
  addYears,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachQuarterOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
  format,
  getISOWeek,
  getMonth,
  getYear,
  isEqual,
  isSameISOWeek,
  isWithinInterval,
  startOfDay,
  startOfISOWeek,
  startOfMonth,
  startOfQuarter,
  startOfYear,
} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@ui/Icons';

import { Box, Button, IconButton, MenuItem, Select, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PickersDay, DatePicker, DateView } from '@mui/x-date-pickers';
export interface DateIntervalProps {
  date?: Date;
  periodSizes?: Partial<Record<IntervalSize, IntervalSize>>;
  periodSize?: IntervalSize;
  elementAfter?: ReactNode;
  filterComponent?: ReactNode;
  suppressPeriodSizeSelector?: boolean;
  suppressBackButton?: boolean;
  onChange?: (dateInterval: DateIntervalInfo) => void;
  onPeriodSizeOpen?: () => void;
  onNextPeriodClick?: () => void;
  disabledChangeDates?: boolean;
  hideDatePicker?: boolean;
  disabledChangePeriods?: boolean;
  hideSelectPeriod?: boolean;
  sx?: SxProps<Theme>;
  disableArrows?: boolean;
  tooltipText?: string;
  periodButtonText?: string;
  disablePeriodButton?: boolean;
}

export interface DateIntervalInfo {
  start: Date;
  end: Date;
  periodSize: IntervalSize;
  granularity: IntervalSize;
  intervals: Interval[];
}

export type IntervalSize = 'day' | 'week' | 'monthByDay' | 'month' | 'quarter' | 'year';

export enum INTERVAL_SIZES {
  DAY = 'day',
  WEEK = 'week',
  MONTHBYDAY = 'monthByDay',
  MONTH = 'month',
  QUARTER = 'quarter',
  YEAR = 'year',
}

const getShortMonth = (date: Date) => {
  return format(date, 'LLLL', { locale: ruLocale });
};

const periodInfo: Record<
  IntervalSize,
  {
    defaultGranularity: IntervalSize;
    sizeLabel: string;
    widthButtonDate?: string;
    getPeriodTitle: (start: Date, end: Date) => string;
    getInitialValue: (date: Date) => Date;
    getNewValue: (date: Date, add?: boolean) => Date;
    getIntervals: (start: Date, end: Date) => Date[];
    pickerView: DateView[];
  }
> = {
  day: {
    defaultGranularity: 'day',
    sizeLabel: 'День',
    getInitialValue: startOfDay,
    getNewValue: (date, add = true) => addDays(date, add ? 1 : -1),
    getPeriodTitle: (start) => `${getISOWeek(start)} неделя`,
    getIntervals: (start, end) => eachDayOfInterval({ start, end }),
    pickerView: ['year', 'month', 'day'],
  },
  week: {
    defaultGranularity: 'day',
    sizeLabel: 'Неделя',
    getInitialValue: startOfISOWeek,
    getNewValue: (date, add = true) => addWeeks(date, add ? 1 : -1),
    getPeriodTitle: (start) => `${getISOWeek(start)} неделя`,
    getIntervals: (start, end) => eachWeekOfInterval({ start, end }, { weekStartsOn: 1 }),
    pickerView: ['year', 'month', 'day'],
  },
  monthByDay: {
    defaultGranularity: 'day',
    sizeLabel: 'Месяц (по дням)',
    getInitialValue: startOfMonth,
    getNewValue: (date, add = true) => addMonths(date, add ? 1 : -1),
    getPeriodTitle: (start) => `${getShortMonth(start)} ${format(start, 'yyyy', { locale: ruLocale })}`,
    getIntervals: (start, end) => eachMonthOfInterval({ start, end }),
    pickerView: ['year', 'month'],
  },
  month: {
    defaultGranularity: 'week',
    sizeLabel: 'Месяц (по неделям)',
    getInitialValue: startOfMonth,
    getNewValue: (date, add = true) => addMonths(date, add ? 1 : -1),
    getPeriodTitle: (start) => `${getShortMonth(start)} ${format(start, 'yyyy', { locale: ruLocale })}`,
    getIntervals: (start, end) => eachMonthOfInterval({ start, end }),
    pickerView: ['year', 'month'],
  },
  quarter: {
    defaultGranularity: 'month',
    sizeLabel: 'Квартал',
    getInitialValue: startOfQuarter,
    getNewValue: (date, add = true) => addQuarters(date, add ? 1 : -1),
    getPeriodTitle: (start, end) =>
      `${format(start, 'LLLL', { locale: ruLocale })} –
    ${format(end, 'LLLL yyyy', { locale: ruLocale })}`,
    getIntervals: (start, end) => eachQuarterOfInterval({ start, end }),
    pickerView: ['year', 'month'],
  },
  year: {
    defaultGranularity: 'quarter',
    sizeLabel: 'Год',
    getInitialValue: startOfYear,
    getNewValue: (date, add = true) => addYears(date, add ? 1 : -1),
    getPeriodTitle: (start) => `${getYear(start)}`,
    getIntervals: (start, end) => eachYearOfInterval({ start, end }),
    pickerView: ['year'],
  },
};

const generateIntervals = (startDate: Date, endDate: Date, granularity: IntervalSize): Interval[] =>
  periodInfo[granularity].getIntervals(startDate, endDate).map((start) => ({
    start,
    end: addDays(periodInfo[granularity].getNewValue(start), -1),
  }));

const datePickerPopperSx: SxProps = {
  '.MuiPickersDay-root.Mui-selected': {
    margin: 0,
    width: 40,
    height: 40,
    borderRadius: 0,
    '&:first-child': {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    },
    '&:last-child': {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    },
  },
};

const Routine = ({
  date: userDate,
  onNextPeriodClick,
  periodSizes,
  periodSize: userPeriodSize,
  filterComponent,
  suppressPeriodSizeSelector,
  suppressBackButton,
  onChange,
  onPeriodSizeOpen,
  elementAfter,
  sx,
  disabledChangeDates = false,
  hideDatePicker = false,
  disabledChangePeriods = false,
  hideSelectPeriod = false,
  disableArrows = false,
  tooltipText,
  disablePeriodButton = false,
  periodButtonText,
}: DateIntervalProps) => {
  const allPeriodSizes = useMemo(() => Object.keys(periodSizes ?? {}), [periodSizes]);

  const [selectedPeriodSize, setSelectedPeriodSize] = useState(userPeriodSize ?? allPeriodSizes[0]);
  const [startDate, setStartDate] = useState(periodInfo[selectedPeriodSize].getInitialValue(userDate ?? new Date()));
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const theme = useTheme();
  const handlePeriodSizeChange = useCallback(
    (value: IntervalSize) => {
      let startDatePeriod = new Date();
      let dateInterval: Interval = { start: startDate, end: addMonths(startDate, 1) };
      switch (selectedPeriodSize) {
        case INTERVAL_SIZES.DAY:
          dateInterval = { start: startDate, end: addDays(startDate, 1) };
          break;
        case INTERVAL_SIZES.WEEK:
          dateInterval = { start: startDate, end: addWeeks(startDate, 1) };
          break;
        case INTERVAL_SIZES.QUARTER:
          dateInterval = { start: startDate, end: addQuarters(startDate, 1) };
          break;
        case INTERVAL_SIZES.YEAR:
          dateInterval = { start: startDate, end: addYears(startDate, 1) };
          break;
      }

      if (!isWithinInterval(new Date(), dateInterval)) {
        if (
          [INTERVAL_SIZES.MONTH, INTERVAL_SIZES.MONTHBYDAY, INTERVAL_SIZES.YEAR].includes(value as INTERVAL_SIZES) &&
          selectedPeriodSize === INTERVAL_SIZES.WEEK
        ) {
          startDatePeriod = addWeeks(startDate, 1);
        } else {
          startDatePeriod = startDate;
        }
      }
      setSelectedPeriodSize(value);
      setStartDate(periodInfo[value].getInitialValue(startDatePeriod));
    },
    [selectedPeriodSize, startDate]
  );

  useEffect(() => {
    if (
      userDate &&
      !isEqual(
        periodInfo[selectedPeriodSize].getInitialValue(userDate),
        periodInfo[selectedPeriodSize].getInitialValue(startDate)
      )
    ) {
      setStartDate(userDate);
    }
    /* eslint-disable react-hooks/exhaustive-deps*/
  }, [userDate]);

  useEffect(() => {
    if (userPeriodSize && userPeriodSize !== selectedPeriodSize) {
      handlePeriodSizeChange(userPeriodSize);
    }
    /* eslint-disable react-hooks/exhaustive-deps*/
  }, [userPeriodSize]);

  useEffect(() => {
    if (!periodSizes?.[selectedPeriodSize]) {
      setSelectedPeriodSize(userPeriodSize ?? allPeriodSizes[0]);
      handlePeriodSizeChange(userPeriodSize ?? allPeriodSizes[0]);
    }
  }, [periodSizes]);

  const goToNextPeriod = () => {
    setStartDate((date) => periodInfo[selectedPeriodSize].getNewValue(date));
    if (onNextPeriodClick) onNextPeriodClick();
  };
  const goToPrevPeriod = () => {
    setStartDate((date) => periodInfo[selectedPeriodSize].getNewValue(date, false));
  };

  const endDate = useMemo(
    () => addDays(periodInfo[selectedPeriodSize].getNewValue(startDate), -1),
    [selectedPeriodSize, startDate]
  );

  const granularity = useMemo(
    () => periodSizes?.[selectedPeriodSize] ?? periodInfo[selectedPeriodSize].defaultGranularity,
    [selectedPeriodSize, periodSizes]
  );

  useEffect(() => {
    if (!onChange) return;

    onChange({
      start: startDate,
      end: endDate,
      periodSize: selectedPeriodSize,
      granularity,
      intervals: generateIntervals(startDate, endDate, granularity),
    });
  }, [endDate, granularity, selectedPeriodSize, startDate]);

  const shouldShowBackButton = useMemo(() => !suppressBackButton, [endDate, startDate, suppressBackButton]);

  const popperSx = useMemo<SxProps | undefined>(() => {
    if (selectedPeriodSize !== 'quarter') return datePickerPopperSx;

    const selectors = generateIntervals(startDate, endDate, 'month').map(
      ({ start: month }) => `.PrivatePickersMonth-root:nth-child(${getMonth(month) + 1})`
    );

    return {
      ...datePickerPopperSx,
      [selectors.join(',')]: {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        borderRadius: 0,
      },
      [selectors[0]]: {
        borderTopLeftRadius: 18,
        borderBottomLeftRadius: 18,
      },
      [selectors[selectors.length - 1]]: {
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
      },
    };
  }, [endDate, selectedPeriodSize, startDate, theme.palette.primary.contrastText, theme.palette.primary.main]);

  return (
    <Box display="flex" gap={2}>
      {!disabledChangeDates && !hideDatePicker && (
        <Box display="flex" alignItems="center" gap={2}>
          <Box display="flex" gap={2}>
            <Button
              onClick={() => setStartDate(periodInfo[selectedPeriodSize].getInitialValue(new Date()))}
              disabled={!shouldShowBackButton}
              variant="outlined"
              className="DateInterval-setToday"
            >
              Cегодня
            </Button>
            <Box>
              <StyledArrowButton disabled={disableArrows} color="primary" onClick={goToPrevPeriod}>
                <ChevronLeftIcon />
              </StyledArrowButton>
              <StyledArrowButton disabled={disableArrows} color="primary" onClick={goToNextPeriod}>
                <ChevronRightIcon />
              </StyledArrowButton>
            </Box>
          </Box>
        </Box>
      )}
      <DatePicker
        disabled={disabledChangeDates}
        onClose={() => setIsDatePickerOpen(false)}
        open={isDatePickerOpen}
        value={startDate}
        minDate={new Date('2000')}
        maxDate={new Date('2049')}
        onChange={(date) => (date ? setStartDate(periodInfo[selectedPeriodSize].getInitialValue(date)) : null)}
        views={periodInfo[selectedPeriodSize].pickerView}
        openTo={last(periodInfo[selectedPeriodSize].pickerView)}
        renderInput={({ inputRef }) => (
          <StyledButton
            ref={inputRef}
            onClick={() => setIsDatePickerOpen(true)}
            variant="text"
            disableTouchRipple
            disabled={disablePeriodButton}
            disableRipple
          >
            {periodButtonText ? (
              <Typography variant="subtitle2" color="text.primary">
                {periodButtonText}
              </Typography>
            ) : (
              <>
                <Typography variant="subtitle2" color="text.primary">
                  {periodInfo[selectedPeriodSize].getPeriodTitle(startDate, endDate)}
                </Typography>
                {selectedPeriodSize === 'week' && (
                  <Typography variant="body2" color="text.secondary">
                    &nbsp;{`(${format(startDate, UI_DATE_FORMAT)} – ${format(endDate, UI_DATE_FORMAT)})`}
                  </Typography>
                )}
              </>
            )}
          </StyledButton>
        )}
        renderDay={
          selectedPeriodSize === 'week'
            ? (day, selectedDays, pickersDayProps) => (
                <PickersDay {...pickersDayProps} selected={isSameISOWeek(day, selectedDays[0])} />
              )
            : undefined
        }
        PopperProps={{ sx: popperSx }}
      />
      <Box flexGrow={1} flexBasis={0} display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
        {elementAfter}
        {!suppressPeriodSizeSelector && allPeriodSizes.length > 1 && (
          <StyledSelect
            disableUnderline
            variant="standard"
            value={selectedPeriodSize}
            onOpen={onPeriodSizeOpen}
            disabled={disabledChangePeriods}
            onChange={(event) => {
              handlePeriodSizeChange(event.target.value as PeriodSize);
            }}
          >
            {allPeriodSizes.map((periodSize) => (
              <MenuItem key={periodSize} value={periodSize}>
                {periodInfo[periodSize].sizeLabel}
              </MenuItem>
            ))}
          </StyledSelect>
        )}
        {filterComponent}
      </Box>
    </Box>
  );
};

export default Routine;

const StyledSelect = styled(Select)`
  min-width: 66px;
  font-size: 13px;
  font-weight: 500;
  .MuiSelect-select {
    display: flex;
    justify-content: center;
    padding-left: 5px;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiSvgIcon-root {
    color: ${({ theme, disabled }) => (disabled ? theme.palette.text.disabled : theme.palette.primary.main)};
  }

  &.hide-select-period {
    display: none;
  }
`;

const StyledArrowButton = styled(IconButton)`
  padding: 0;

  svg {
    height: 24px;
    width: auto;
    border-radius: 50%;
  }
` as typeof IconButton;

const StyledButton = styled(Button)`
  text-transform: none;

  &:hover {
    background: none;
  }
`;
