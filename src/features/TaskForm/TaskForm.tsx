import DefaultDrawer from '@ui/Drawer';
import { useAppSelector, useAppDispatch } from '../../shared/store/global.store';
import { setIsTaskFormOpen } from '../../shared/store/modals.store';
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
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Dialog,
} from '@mui/material';
import axios from 'axios';
import { TaskDifficulty } from '@helpers/calcLavel';
import { TaskFormProps, TaskFormValues, TaskFormSchema, XPTarget, Period } from './TaskForm.types';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { characteristics } from '@constants/characteristics';
const TaskForm = () => {
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(setIsTaskFormOpen(false));
  const { isTaskFormOpen } = useAppSelector((state) => state.modalsSlice);

  const [dialogOpene, setDialogOpen] = useState(false);
  const [skills, setSkills] = useState<
    | {
        id: string;
        name: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    axios
      .get('/skills')
      .then((res) => res.data)
      .then((data) => setSkills(data));
  }, []);

  //если не админ, то отправить на одобрение админу

  const formMethods = useForm<TaskFormValues>({
    resolver: yupResolver(TaskFormSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = formMethods;

  const formValues = watch();
  const {
    fields: subtaskFields,
    append: appendSubtask,
    remove: removeSubtask,
  } = useFieldArray<TaskFormValues, 'subtasks'>({
    control,
    name: 'subtasks',
  });
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray<TaskFormValues, 'skills'>({
    control,
    name: 'skills',
  });
  const {
    fields: characteristicFields,
    append: appendCharacteristic,
    remove: removeCharacteristic,
  } = useFieldArray<TaskFormValues, 'characteristics'>({
    control,
    name: 'characteristics',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => console.log(errors), [errors]);
  return (
    <DefaultDrawer open={isTaskFormOpen} onClose={onClose}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <TextField {...field} variant="standard" label="Название" />}
      />
      <Controller
        control={control}
        name="description"
        render={({ field }) => <TextField {...field} variant="standard" label="Описание" />}
      />

      <ToggleButtonGroup
        fullWidth
        value={formValues.target}
        exclusive
        onChange={(_e, value) => setValue('target', value)}
      >
        {Object.values(XPTarget).map((item, index) => (
          <ToggleButton key={index} value={item}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {formValues.target === XPTarget.Skill ? (
        <>
          <Button
            fullWidth
            onClick={() =>
              appendSkill({
                skillId: undefined,
                percent: 100,
              })
            }
          >
            связанный навык
          </Button>
          {skillFields.map((field, index) => (
            <Box key={field.id} display="flex" flexDirection="row" gap={1} width="100%">
              <Autocomplete
                options={[...(skills ?? []), { id: 'create', name: '' }]}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField variant="standard" label="Навык" {...params} />}
                renderOption={(props, option, { selected }) => {
                  return option.id === 'create' ? (
                    <Button fullWidth onClick={() => {}}>
                      + Создать навык
                    </Button>
                  ) : (
                    <li {...props} aria-selected={selected}>
                      {option.name}
                    </li>
                  );
                }}
              />
              <TextField variant="standard" label="Доля" type="number" />
              <IconButton onClick={() => removeSkill(index)}>x</IconButton>
            </Box>
          ))}
        </>
      ) : (
        <>
          <Button
            fullWidth
            onClick={() =>
              appendCharacteristic({
                characteristicId: undefined,
                percent: 100,
              })
            }
          >
            связанная характеристика
          </Button>
          {characteristicFields.map((field, index) => (
            <Box key={field.id} display="flex" flexDirection="row" gap={1} width="100%">
              <Autocomplete
                options={characteristics}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField variant="standard" label="Характеристика" {...params} />}
              />
              <TextField variant="standard" label="Доля" type="number" />
              <IconButton onClick={() => removeCharacteristic(index)}>x</IconButton>
            </Box>
          ))}
        </>
      )}

      <FormControlLabel
        control={<Checkbox />}
        label="На весь год"
        onChange={(e, checked) => setValue('year', checked)}
      />
      {formValues.year && (
        <>
          <Button
            onClick={() =>
              appendSubtask({
                name: '',
                difficulty: TaskDifficulty.Easy,
              })
            }
          >
            добавить подзадачу
          </Button>
          {subtaskFields.map((subtaskField, index) => (
            <Box key={subtaskField.id}>
              <Controller
                control={control}
                name={`subtasks.${index}.name`}
                render={({ field }) => <TextField {...field} label="Название" />}
              />
              <ToggleButtonGroup
                value={formValues.subtasks[index].difficulty}
                exclusive
                onChange={(_e, value) => setValue(`subtasks.${index}.difficulty`, value)}
              >
                {Object.values(TaskDifficulty).map((item, index) => (
                  <ToggleButton key={index} value={item}>
                    {item}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <IconButton onClick={() => removeSubtask(index)}>x</IconButton>
            </Box>
          ))}
        </>
      )}

      {!formValues.year && (
        <Box display="flex" flexDirection="row" gap={2}>
          <DatePicker />
          <TimePicker />
        </Box>
      )}

      <FormControlLabel
        control={<Checkbox />}
        label="Повторять"
        onChange={(e, checked) => {
          setDialogOpen(checked);
        }}
      />

      <ToggleButtonGroup
        fullWidth
        value={formValues.difficulty}
        exclusive
        onChange={(_e, value) => setValue('difficulty', value)}
      >
        {Object.values(TaskDifficulty).map((item, index) => (
          <ToggleButton key={index} value={item}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box>
        <Button onClick={onSubmit}>сохранить</Button>
        <Button onClick={onClose}>отмена</Button>
      </Box>
      <Dialog open={dialogOpene} onClose={() => setDialogOpen(false)}>
        {Object.values(Period).map((item, index) => (
          <Button key={index} onClick={() => setValue('repeat', item)}>
            {item}
          </Button>
        ))}
        <Box>
          <Controller
            control={control}
            name="repeat.count"
            render={({ field }) => <TextField {...field} type="number" />}
          />

          <Select>
            {Object.values(Period).map((item, index) => (
              <MenuItem key={index} onClick={() => setValue('repeat.period', item)}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button onClick={() => setDialogOpen(false)}>ok</Button>
      </Dialog>
    </DefaultDrawer>
  );
};

export default TaskForm;
