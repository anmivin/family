import { groupBy, keyBy } from 'lodash';
import { addWeeks, eachDayOfInterval, endOfWeek, format, getDaysInMonth, isSameDay, startOfWeek } from 'date-fns';
import { useMemo, useState, useCallback } from 'react';
import { Box, Typography, IconButton, TableBody, TableRow, TableCell, TableHead, Table } from '@mui/material';
import { getDefaultDate } from '@helpers/dates';
const SimpleTasks = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const ta = [
    {
      date: '03-01-2025',
      id: 1,
    },
    {
      date: '03-03-2025',
      id: 2,
    },
    {
      date: '03-03-2025',
      id: 3,
    },
    {
      date: '03-03-2025',
      id: 1,
    },
    {
      date: '03-05-2025',
      id: 2,
    },
    {
      date: '03-06-2025',
      id: 2,
    },
    {
      date: '03-07-2025',
      id: 3,
    },
    {
      date: '03-03-2025',
      id: 3,
    },
    {
      date: '03-07-2025',
      id: 2,
    },
    {
      date: '03-09-2025',
      id: 1,
    },
    {
      date: '03-08-2025',
      id: 9,
    },
    {
      date: '03-05-2025',
      id: 9,
    },
  ];
  const groupedByTask = groupBy(ta, (i) => i.id);

  const daysInWeek = useMemo(() => {
    return eachDayOfInterval({
      start: startOfWeek(currentWeek, { weekStartsOn: 1 }),
      end: endOfWeek(currentWeek, { weekStartsOn: 1 }),
    });
  }, [currentWeek]);

  return (
    <Box sx={{ overflowY: 'auto' }}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={() => setCurrentWeek((prev) => addWeeks(prev, -1))}>{'<'}</IconButton>
        <Typography>
          {getDefaultDate(daysInWeek[0])} - {getDefaultDate(daysInWeek[6])}
        </Typography>
        <IconButton onClick={() => setCurrentWeek((prev) => addWeeks(prev, 1))}>{'>'}</IconButton>
      </Box>
      <Table>
        <TableHead>
          <TableCell>kzkzkz</TableCell>
          {daysInWeek.map((item) => (
            <TableCell width="20px">{format(item, 'd')}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {Object.entries(groupedByTask).map(([k, v]) => (
            <TableRow>
              <TableCell height="20px">{k}</TableCell>
              {daysInWeek.map((item) => {
                const isCompleted = v.find((y) => isSameDay(new Date(y.date), item));
                return <TableCell sx={{ backgroundColor: isCompleted && 'red' }}>{isCompleted ? 'x' : ''}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SimpleTasks;
