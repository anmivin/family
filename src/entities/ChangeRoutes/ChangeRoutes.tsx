import { Box, Typography, Button, IconButton } from '@mui/material';
import { useCallback, useState } from 'react';
import { useLocalStorage } from '@shared/helpers/useLocalstorage';
import { defaultRouting, menuRoutes, RoutesProps } from '@shared/constants/routes';
import { ChevronDownIcon, ChevronUpIcon } from '@shared/ui/Icons';
import { useAppSelector, useAppDispatch } from '@shared/stores/global.store';
import { setMainPages, setOtherPages } from '@shared/stores/users/users.store';
const ChangeRoutes = () => {
  const [value, setValue] = useLocalStorage<{ key: string; order: number }[]>('routes', defaultRouting);
  const dispatch = useAppDispatch();
  const { mainPages, otherPages } = useAppSelector((state) => state.userSlice);
  const [items, setItems] = useState([...mainPages, ...otherPages]);
  const changeRoutes = (item: RoutesProps, up?: boolean) => {
    setItems((prev) => {
      const copy = prev.slice(0);
      const changedItemId = copy.indexOf(item);
      const temp = copy[changedItemId];
      copy[changedItemId] = copy[changedItemId + (up ? -1 : 1)];
      copy[changedItemId + (up ? -1 : 1)] = temp;
      return copy;
    });
  };
  const saveRoutes = useCallback(() => {
    const newOrder = items.map((item, index) => ({ order: index + 1, key: item.link }));
    setValue(newOrder);
    dispatch(setMainPages(items.slice(0, 5)));
    dispatch(setOtherPages(items.slice(5)));
  }, [items]);
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {items.map((route, index) => (
        <Box display="flex" gap={2}>
          {route.icon}

          <Typography>{route.name}</Typography>
          {index !== items.length - 1 && (
            <IconButton onClick={() => changeRoutes(route)}>
              <ChevronDownIcon />
            </IconButton>
          )}
          {index > 0 && (
            <IconButton onClick={() => changeRoutes(route, true)}>
              <ChevronUpIcon />
            </IconButton>
          )}
        </Box>
      ))}
      <Button onClick={saveRoutes}>сохранить</Button>
    </Box>
  );
};

export default ChangeRoutes;
