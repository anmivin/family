import DefaultDrawer from '@ui/Drawer';
import PercentageField from '@ui/PercentageField/PercentageField';
import { useAppSelector, useAppDispatch } from '@shared/stores/global.store';
import { setIsTaskFormOpen } from '@shared/stores/modals/modals.store';
import { setSelectedTask } from '@shared/stores/tasks/tasks.store';
import FormSection from '@ui/FormSection';
import { Abilities, DayOfWeek, Difficulty, RepeatPeriod, TaskType } from '@shared/api/Api';
import { pluralizeString, getErrorMessage } from '@shared/helpers/utils';
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
import { Can, useCan } from '@shared/ability/helpers';
import { createTask } from '@shared/helpers/fetcher';
import { TaskDifficultyXP } from '@shared/helpers/calcLavel';
import { TaskFormProps, TaskFormValues, TaskFormSchema, XPTarget, PeriodLabels, DayLabels } from './TaskForm.types';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useEffect, useMemo, useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import useSwr from '@shared/swr/useSwr';

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setIsTaskFormOpen(false));
    dispatch(setSelectedTask(null));
  };

  const { successToast, errorToast } = useToast();
  const { isTaskFormOpen } = useAppSelector((state) => state.modalsSlice);
  const { selectedTaskId } = useAppSelector((state) => state.taskSlice);
  const { data: selectedTask } = useSwr({ url: '/tasks/{id}', params: { id: selectedTaskId ?? '' } });
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
      habit: selectedTask ? selectedTask.type === TaskType.HABIT : false,
      simple: selectedTask ? selectedTask.type === TaskType.SMALL : false,
      important: selectedTask ? selectedTask.isImportant : false,
      repeat: undefined,
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
  useEffect(() => console.log(errors, formValues), [errors, formValues]);
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
      successToast('Задача создана');
    } catch (e) {
      errorToast(getErrorMessage(e));
    }
  });

  const tooltipTitle = useMemo(() => {
    if (formValues.habit) return 'Привычка оценивается как лёгкая задача';
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

  const repeatText = useMemo(() => {
    if (!formValues.repeat?.period) return '';
    const period = PeriodLabels[formValues.repeat.period];
    const count = !!formValues.repeat.count ? +formValues.repeat.count : 1;
    return formValues.repeat ? ` (Кажд. ${count > 1 ? count : ''} ${pluralizeString(count, period.labels)})` : '';
  }, [formValues]);

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
          <Tooltip title="Простая задача в пределах пяти минут">
            <FormControlLabel
              control={<Checkbox checked={formValues.simple} />}
              label="Простая задача"
              onChange={(_, checked) => {
                setValue('simple', checked);
                setValue('important', false);
                setValue('habit', false);
              }}
            />
          </Tooltip>
          <FormControlLabel
            control={<Checkbox checked={formValues.habit} />}
            label="Привычка"
            onChange={(_, checked) => {
              setValue('habit', checked);
              setValue('difficulty', Difficulty.EASY);
            }}
          />
          <Tooltip title="За важную задачу вы получаете больше XP">
            <FormControlLabel
              control={<Checkbox checked={formValues.important} />}
              label="Важная задача"
              onChange={(_, checked) => {
                setValue('important', checked);
                setValue('simple', false);
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

      {!formValues.simple && (
        <>
          <FormSection title="Дата и время">
            <Box display="flex" flexDirection="row" gap={2}>
              <DatePicker />
              <TimePicker />
            </Box>

            <Box>
              <FormControlLabel
                control={<Checkbox />}
                label={'Повторять' + repeatText}
                onChange={(_, checked) => {
                  setValue('repeat', { count: 1, period: RepeatPeriod.DAILY });
                  setShowRepeat(checked);
                }}
              />
            </Box>
          </FormSection>
          {showRepeat && (
            <>
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
              <ToggleButtonGroup
                fullWidth
                value={formValues.repeat?.days}
                exclusive
                onChange={(_e, value) => setValue('repeat.days', value)}
              >
                {Object.values(DayOfWeek).map((item, index) => (
                  <ToggleButton key={index} value={item}>
                    {DayLabels[item]}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </>
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
        </>
      )}
    </DefaultDrawer>
  );
};

export default TaskForm;
