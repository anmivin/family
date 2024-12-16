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
import { TaskFormProps, TaskFormValues, TaskFormSchema } from './TaskForm.types';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray } from 'react-hook-form';
const skills = [
  { id: '1', label: 'lalal' },
  { id: '2', label: 'ssss' },
  { id: '3', label: 'ndnd' },
  { id: '4', label: 'owwio' },
];
const TaskForm = () => {
  const [repeat, setRepeat] = useState(false);
  //если не админ, то отправить на одобрение админу

  const formMethods = useForm<TaskFormValues>({
    resolver: yupResolver(TaskFormSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const { fields, append } = useFieldArray<TaskFormValues>({ control, name: 'subtasks' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => console.log(errors), [errors]);
  return (
    <DefaultDrawer open>
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
      <FormControlLabel control={<Checkbox />} label="На весь год" onChange={(e, checked) => {}} />
      <Button>добавить</Button>
      {fields.map((field) => (
        <Box key={field.id}></Box>
      ))}
      <DatePicker />
      <TimePicker />

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
      <Button onClick={onSubmit}>сохранить</Button>
      <Button>отмена</Button>
    </DefaultDrawer>
  );
};

export default TaskForm;
