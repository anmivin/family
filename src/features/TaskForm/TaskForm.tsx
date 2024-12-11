import DefaultDrawer from '@ui/Drawer';
import {
  TextField,
  Autocomplete,
  Button,
  Box,
  MenuItem,
  Select,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
const skills = [
  { id: '1', label: 'lalal' },
  { id: '2', label: 'ssss' },
  { id: '3', label: 'ndnd' },
  { id: '4', label: 'owwio' },
];
const TaskForm = () => {
  const [noDate, setNoDate] = useState(false);
  const [noTime, setNoTime] = useState(false);
  const [repeat, setRepeat] = useState(false);
  //если не админ, то отправить на одобрение админу
  return (
    <DefaultDrawer>
      <TextField variant="standard" label="Название" />
      <TextField variant="standard" label="Описание" />
      <Autocomplete
        options={[...skills, { id: 'create', label: '' }]}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField variant="standard" label="Навык" {...params} />}
        renderOption={(props, option, { selected }) => {
          return option.id === 'create' ? (
            <Button fullWidth onClick={() => {}}>
              + Создать навык
            </Button>
          ) : (
            <li {...props} aria-selected={selected}>
              {option.label}
            </li>
          );
        }}
      />
      <FormControlLabel control={<Checkbox />} label="Бессрочное" onChange={(e, checked) => setNoDate(checked)} />
      {!noDate && (
        <>
          <FormControlLabel control={<Checkbox />} label="Без времени" onChange={(e, checked) => setNoTime(checked)} />
          {noTime ? <DatePicker /> : <DateTimePicker />}
        </>
      )}

      <FormControlLabel control={<Checkbox />} label="Повторять" onChange={(e, checked) => setRepeat(checked)} />
      {repeat && (
        <Select variant="standard">
          <MenuItem value={10}>просто повторять</MenuItem>
          <MenuItem value={10}>каждый день</MenuItem>
          <MenuItem value={20}>через день</MenuItem>
          <MenuItem value={30}>каждую неделю</MenuItem>
          <MenuItem value={30}>каждый месяц</MenuItem>
        </Select>
      )}

      <>повторять</>
      <>модалка каждое сколько</>
      <></>
      <></>
      <></>
      <>сложность</>
      <Button>сохранить</Button>
      <Button>отмена</Button>
    </DefaultDrawer>
  );
};

export default TaskForm;
