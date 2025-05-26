import DefaultDrawer from '@ui/Drawer';
import PercentageField from '@ui/PercentageField/PercentageField';
import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setIsTaskFormOpen } from '@stores/modals/modals.store';
import { setSelectedTask } from '@stores/tasks/tasks.store';
import FormSection from '@ui/FormSection';
import { Abilities, Difficulty, RepeatPeriod, TaskType } from '@api/Api';
import { pluralizeString, getErrorMessage } from '@helpers/utils';
import { useToast } from '@ui/Toast/ToastProvider';
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
import { Can, useCan } from '../../shared/ability/helpers';
import { createTask } from '@helpers/fetcher';
import { TaskDifficultyXP } from '@helpers/calcLavel';
import { TaskFormProps, TaskFormValues, TaskFormSchema, XPTarget, PeriodLabels } from './TaskForm.types';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useEffect, useMemo, useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import useSwr from '../../shared/swr/useSwr';

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setIsTaskFormOpen(false));
    dispatch(setSelectedTask(null));
  };

  const { successToast, errorToast } = useToast();
  const { isTaskFormOpen } = useAppSelector((state) => state.modalsSlice);
  const { selectedTaskId } = useAppSelector((state) => state.taskSlice);
  const { data: selectedTask } = useSwr({ url: '/tasks/{id}', params: { path: { id: selectedTaskId ?? '' } } });
  const { data: skillList } = useSwr({ url: '/characteristics/skills' });
  const { data: featureList } = useSwr({ url: '/characteristics/features/user' });

  const { ability } = useCan();

  const [showRepeat, setShowRepeat] = useState(false);

  const defaultValues = useMemo(() => {
    return {
      name: selectedTask ? selectedTask.title : undefined,
      description: selectedTask ? selectedTask.description : undefined,
      difficulty: selectedTask ? selectedTask.difficulty : undefined,
      target: XPTarget.Skill,
      skills: [{ item: { id: undefined, name: undefined }, percent: undefined }],
      characteristics: [{ item: { id: undefined, name: undefined }, percent: undefined }],
      date: undefined,
      time: undefined,
      year: false,
      habit: selectedTask ? selectedTask.type === 'HABIT' : false,
      important: selectedTask ? selectedTask.isImportant : false,
      subtasks: [],
      repeat: { count: 1, period: RepeatPeriod.DAILY },
    };
  }, [selectedTask]);
  //если не админ, то отправить на одобрение админу
  const formMethods = useForm<TaskFormValues>({
    resolver: yupResolver(TaskFormSchema),
    defaultValues: defaultValues,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = formMethods;

  const formValues = watch();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const onSubmit = handleSubmit(async (data) => {
    const requestData = {
      title: data.name,
      difficulty: data.difficulty,
      description: data.description,
      isImportant: data.important ?? false,
      type: data.habit ? TaskType.HABIT : TaskType.TODO,
      deadline: data.date ? data.date.toISOString() : undefined,
      repeat: data.repeat && showRepeat ? { period: data.repeat?.period, currency: data.repeat?.count } : undefined,
      skills: data.skills
        .map((skill) => {
          if (!skill.item.id || !skill.percent) return;
          return { id: skill.item.id, percent: skill.percent };
        })
        .filter((item) => !!item),
      features: data.characteristics
        .map((skill) => {
          if (!skill.item.id || !skill.percent) return;
          return { id: skill.item.id, percent: skill.percent };
        })
        .filter((item) => !!item),
    };
    try {
      await createTask(requestData);
      successToast({ title: 'Задача создана' });
    } catch (e) {
      errorToast({ title: getErrorMessage(e) });
    }
  });

  const tooltipTitle = useMemo(() => {
    if (formValues.habit) return 'Привычка оценивается как лёгкая задача';
    /*  if (formValues.subtasks.length) return 'Если есть подзадачи, то сложность оценивается по сумме сложностей подзадач'; */
  }, [formValues]);

  const getTooltipTitle = useCallback(
    (item: Difficulty) => {
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

  /*   const repeatText = useMemo(() => {
    if (!formValues.repeat) return '';
    const period = PeriodLabels[formValues.repeat.period];
    const count = !!formValues.repeat.count ? +formValues.repeat.count : 1;
    return formValues.repeat ? ` (Кажд. ${count > 1 ? count : ''} ${pluralizeString(count, period.labels)})` : '';
  }, [formValues]); */

  return (
    <DefaultDrawer
      formMethods={formMethods}
      open={isTaskFormOpen}
      onClose={onClose}
      title={`${selectedTask ? 'Редактирование' : 'Создание'} задачи`}
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
        {/* <Can crud="create" can="ASSIGN_TASK"> */}
        <Controller
          control={control}
          name="asignee"
          render={({ field }) => (
            <Autocomplete
              {...field}
              fullWidth
              onChange={(_, newValue) => field.onChange(newValue)}
              options={[
                { id: '1', name: '1' },
                { id: '2', name: '2' },
                { id: '3', name: '3' },
              ]}
              getOptionLabel={(option) => option.name ?? ''}
              renderInput={(params) => <TextField variant="standard" label="Ответственный" {...params} />}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
          )}
        />
        {/*   </Can> */}
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            label="Привычка"
            onChange={(_, checked) => {
              setValue('habit', checked);
              setValue('difficulty', Difficulty.EASY);
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
            options={featureList ?? []}
            label="Характеристика"
            labelType="feminine"
          />
        ) : (
          <PercentageField
            name="skills"
            options={skillList ?? []}
            label="Навык"
            labelType="masculine"
            enableCreateOption={ability({ crud: 'create', can: Abilities.CREATE_SKILL })}
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
        {/*  {!formValues.year && ( */}
        <Box display="flex" flexDirection="row" gap={2}>
          <DatePicker />
          <TimePicker />
        </Box>
        {/*    )} */}
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            label="На весь год"
            onChange={(_, checked) => setValue('year', checked)}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={'Повторять' /* + repeatText */}
            onChange={(_, checked) => {
              setShowRepeat(checked);
            }}
          />
        </Box>
      </FormSection>

      {showRepeat && (
        <Box display="flex" flexDirection="row" gap={2}>
          <Controller
            control={control}
            name="repeat.period"
            render={({ field }) => (
              <Autocomplete
                {...field}
                fullWidth
                onChange={(_, newValue) => field.onChange(newValue)}
                options={Object.values(RepeatPeriod)}
                getOptionLabel={(option) => PeriodLabels[option].textfieldLabel}
                renderInput={(params) => <TextField variant="standard" label="Период" {...params} />}
              />
            )}
          />
          <Controller
            control={control}
            name="repeat.count"
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                fullWidth
                variant="standard"
                label="Кажд."
                onChange={(e) => {
                  if (!formValues?.repeat?.period) setValue('repeat.period', RepeatPeriod.DAILY);
                  field.onChange(e);
                }}
              />
            )}
          />
        </Box>
      )}

      <FormSection title="Сложность">
        <Tooltip title={tooltipTitle}>
          <ToggleButtonGroup
            fullWidth
            value={formValues.difficulty}
            exclusive
            disabled={formValues.habit}
            onChange={(_e, value) => setValue('difficulty', value)}
          >
            {Object.values(Difficulty).map((item, index) => (
              <Tooltip title={getTooltipTitle(item)}>
                <ToggleButton key={index} value={item}>
                  {TaskDifficultyXP[item].icon}
                </ToggleButton>
              </Tooltip>
            ))}
          </ToggleButtonGroup>
        </Tooltip>
      </FormSection>
    </DefaultDrawer>
  );
};

export default TaskForm;
