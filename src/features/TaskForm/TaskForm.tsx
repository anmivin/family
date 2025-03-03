import DefaultDrawer from '@ui/Drawer';
import PercentageField from '@ui/PercentageField/PercentageField';
import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setIsTaskFormOpen } from '@stores/modals.store';
import FormSection from '@ui/FormSection';
import { pluralizeString } from '@helpers/utils';
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
  Tooltip,
} from '@mui/material';

import axios from 'axios';
import { TaskDifficulty, TaskDifficultyXP } from '@helpers/calcLavel';
import { TaskFormProps, TaskFormValues, TaskFormSchema, XPTarget, Period, PeriodLabels } from './TaskForm.types';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useEffect, useMemo, useCallback, useState } from 'react';
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

  const defaulValues = {
    name: undefined,
    description: undefined,
    difficulty: undefined,
    target: XPTarget.Skill,
    skills: [{ item: { id: undefined, name: undefined }, percent: undefined }],
    characteristics: [{ item: { id: undefined, name: undefined }, percent: undefined }],
    date: undefined,
    time: undefined,
    year: false,
    habit: false,
    important: false,
    subtasks: [],
    repeat: undefined,
  };
  //если не админ, то отправить на одобрение админу
  const formMethods = useForm<TaskFormValues>({
    resolver: yupResolver(TaskFormSchema),
    defaultValues: defaulValues,
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

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const tooltipTitle = useMemo(() => {
    if (formValues.habit) return 'Привычка оценивается как лёгкая задача';
    if (formValues.subtasks.length) return 'Если есть подзадачи, то сложность оценивается по сумме сложностей подзадач';
  }, [formValues]);

  const getTooltipTitle = useCallback(
    (item: TaskDifficulty) => {
      const examples = TaskDifficultyXP[item].examples.join(', ');
      return (
        <Box>
          <Typography>{TaskDifficultyXP[item].label}</Typography>
          <Typography>Например: {examples}</Typography>
        </Box>
      );
    },
    [formValues]
  );

  const repeatText = useMemo(() => {
    if (!formValues.repeat) return '';
    const period = PeriodLabels[formValues.repeat.period];
    const count = !!formValues.repeat.count ? +formValues.repeat.count : 1;
    return formValues.repeat
      ? ` (${pluralizeString(count, period.every)} ${count > 1 ? count : ''} ${pluralizeString(count, period.labels)})`
      : '';
  }, [formValues]);

  return (
    <DefaultDrawer
      formMethods={formMethods}
      open={isTaskFormOpen}
      onClose={onClose}
      title="Создание задачи"
      footer={
        <Box width="100%" display="flex" justifyContent="center" gap={8}>
          <Button onClick={onSubmit}>Сохранить</Button>
          <Button onClick={onClose}>Отмена</Button>
        </Box>
      }
    >
      <FormSection title="Основная информация">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Название"
              required
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => <TextField {...field} rows={4} variant="standard" label="Описание" />}
        />
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            label="Привычка"
            onChange={(_, checked) => {
              setValue('habit', checked);
              setValue('difficulty', TaskDifficulty.Easy);
            }}
          />
          <Tooltip title="За важную задачу вы получаете больше XP">
            <FormControlLabel
              control={<Checkbox />}
              label="Важная задача"
              onChange={(_, checked) => {
                setValue('important', checked);
              }}
            />
          </Tooltip>
        </Box>
      </FormSection>

      <FormSection title="Повышение навыка">
        {formValues.target === XPTarget.Characteristic ? (
          <PercentageField
            name="characteristics"
            options={characteristics.map(({ id, name }) => ({ id, name }))}
            label="Характеристика"
            labelType="feminine"
          />
        ) : (
          <PercentageField
            name="skills"
            options={skills ?? []}
            label="Навык"
            labelType="masculine"
            enableCreateOption
          />
        )}

        <FormControlLabel
          control={<Checkbox />}
          label="Повышать характеристику"
          onChange={(_, checked) => {
            setValue('target', checked ? XPTarget.Characteristic : XPTarget.Skill);
          }}
        />
      </FormSection>

      <FormSection title="Дата и время">
        {!formValues.year && (
          <Box display="flex" flexDirection="row" gap={2}>
            <DatePicker />
            <TimePicker />
          </Box>
        )}
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            label="На весь год"
            onChange={(_, checked) => setValue('year', checked)}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={'Повторять' + repeatText}
            onChange={(_, checked) => {
              setDialogOpen(checked);
              if (!checked) setValue('repeat', undefined);
            }}
          />
        </Box>
      </FormSection>

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

      <FormSection title="Сложность">
        <Tooltip title={tooltipTitle}>
          <ToggleButtonGroup
            fullWidth
            value={formValues.difficulty}
            exclusive
            disabled={formValues.habit || !!formValues.subtasks.length}
            onChange={(_e, value) => setValue('difficulty', value)}
          >
            {Object.values(TaskDifficulty).map((item, index) => (
              <Tooltip title={getTooltipTitle(item)}>
                <ToggleButton key={index} value={item}>
                  {TaskDifficultyXP[item].icon}
                </ToggleButton>
              </Tooltip>
            ))}
          </ToggleButtonGroup>
        </Tooltip>
      </FormSection>

      <Dialog open={dialogOpene} onClose={() => setDialogOpen(false)}>
        {Object.values(Period).map((item, index) => (
          <Button key={index} onClick={() => setValue('repeat', { period: item, count: 1 })}>
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
