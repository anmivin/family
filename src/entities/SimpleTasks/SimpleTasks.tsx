import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';
import { useMemo, useState } from 'react';
import { Box, TableBody, TableRow, TableCell, TableHead, Table, IconButton, Typography } from '@mui/material';
import { getDayMonth } from '@helpers/dates';
import { StarIcon, CoinIcon } from '@ui/Icons';
import { ChangeInterval } from '@ui/CalendarHeader';
const SimpleTasks = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const tasks = [
    {
      id: '12',
      name: 'Первый чел',
      tasks: [
        {
          name: 'задача 1',
          count: 26,
        },
        {
          name: 'задача 2',
          count: 199,
        },
        {
          name: 'задача 3',
          count: 0,
        },
      ],
    },
    {
      id: '12',
      name: 'Второй чел',
      tasks: [
        {
          name: 'задача 1 с длиннююююююююююююююююююююююююююююющим названием',
          count: 2,
        },
        {
          name: 'задача 2',
          count: 20,
        },
        {
          name: 'задача 3',
          count: 57,
        },
      ],
    },
  ];

  const daysInWeek = useMemo(() => {
    return eachDayOfInterval({
      start: startOfWeek(currentWeek, { weekStartsOn: 1 }),
      end: endOfWeek(currentWeek, { weekStartsOn: 1 }),
    });
  }, [currentWeek]);

  const getChecks = (rest: number, grouped: number = 0) => {
    let byTen = grouped;
    let single = rest;

    if (rest >= 10) {
      byTen += 1;
      single -= 10;
      return getChecks(single, byTen);
    } else return { single, byTen };
  };
  return (
    <Box sx={{ overflowY: 'auto' }}>
      <ChangeInterval
        currentValue={`${getDayMonth(daysInWeek[0])} - ${getDayMonth(daysInWeek[6])}`}
        changeNextInterval={() => setCurrentWeek((prev) => addWeeks(prev, 1))}
        changePrevInterval={() => setCurrentWeek((prev) => addWeeks(prev, -1))}
      />

      <Table>
        <TableHead>
          <TableCell width={50} />
          <TableCell width={200} />
          <TableCell />
        </TableHead>
        <TableBody>
          {tasks.map((task) => {
            const personTotal = getChecks(task.tasks.reduce((acc, curr) => acc + curr.count, 0));
            return (
              <>
                <TableRow>
                  <TableCell colSpan={2}>{task.name}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={2}>
                      {personTotal.byTen && (
                        <>
                          <CoinIcon />
                          <Typography>x {personTotal.byTen}</Typography>
                        </>
                      )}
                      <StarIcon size={16} />
                      <Typography>x {personTotal.single}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                {task.tasks.map((item) => {
                  const checks = getChecks(item.count);
                  return (
                    <TableRow>
                      <TableCell>
                        <IconButton>
                          <CoinIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Typography noWrap maxWidth={200}>
                          {item.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {[...Array(checks.byTen)].map(() => (
                            <CoinIcon />
                          ))}
                          {[...Array(checks.single)].map(() => (
                            <StarIcon size={16} />
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SimpleTasks;
