import DefaultDrawer from '@ui/Drawer';
import PercentageField from '@ui/PercentageField/PercentageField';
import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setIsSkillFormOpen } from '@stores/modals/modals.store';
import { setSelectedTask } from '@stores/tasks/tasks.store';

import { TextField, Button, Box } from '@mui/material';

import { TaskFormValues, TaskFormSchema } from './SkillForm.types';

import { useEffect, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import useSwr from '../../shared/swr/useSwr';

const SkillForm = () => {
  const { data: featureList } = useSwr({ url: '/characteristics/features/user' });
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setIsSkillFormOpen(false));
    dispatch(setSelectedTask(null));
  };

  const { selectedSkill } = useAppSelector((state) => state.listSlice);

  const { isSkillFormOpen } = useAppSelector((state) => state.modalsSlice);

  const defaultValues = useMemo(() => {
    return {
      name: selectedSkill ? selectedSkill.name : undefined,
      description: selectedSkill ? selectedSkill.description : undefined,
      features: selectedSkill
        ? selectedSkill.features.map((feat) => ({
            item: featureList?.find((f) => f.id === feat.id),
            percent: feat.percent,
          }))
        : [],
    };
  }, [selectedSkill]);

  const formMethods = useForm<TaskFormValues>({
    resolver: yupResolver(TaskFormSchema),
    defaultValues,
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

  const onSubmit = handleSubmit((data) => {});

  return (
    <DefaultDrawer
      formMethods={formMethods}
      open={isSkillFormOpen}
      onClose={onClose}
      title={`${selectedSkill ? 'Редактирование' : 'Создание'} навыка`}
      footer={
        <Box width="100%" display="flex" justifyContent="center" gap={8}>
          <Button onClick={onSubmit}>Сохранить</Button>
          <Button onClick={onClose}>Отмена</Button>
        </Box>
      }
    >
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
      <PercentageField name="features" options={featureList ?? []} label="Характеристика" labelType="feminine" />
    </DefaultDrawer>
  );
};

export default SkillForm;
