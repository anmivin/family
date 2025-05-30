import DefaultDrawer from '@ui/Drawer';
import PercentageField from '@ui/PercentageField/PercentageField';
import { useAppSelector, useAppDispatch } from '@shared/stores/global.store';
import { setIsSkillFormOpen } from '@shared/stores/modals/modals.store';
import { setSelectedTask } from '@shared/stores/tasks/tasks.store';
import { useToast } from '@shared/ui/Toast/ToastProvider';
import { TextField, Button, Box } from '@mui/material';
import { createSkill } from '@shared/helpers/fetcher';
import { SkillFormValues, SkillFormSchema } from './SkillForm.types';

import { useEffect, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import useSwr from '@shared/swr/useSwr';
import { getErrorMessage } from '@shared/helpers/utils';

const SkillForm = () => {
  const { data: featureList } = useSwr({ url: '/characteristics/features/user' });
  const { mutate } = useSwr({ url: '/characteristics/skills/user' });
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setIsSkillFormOpen(false));
    dispatch(setSelectedTask(null));
  };

  const { successToast, errorToast } = useToast();
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

  const formMethods = useForm<SkillFormValues>({
    resolver: yupResolver(SkillFormSchema),
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

  const onSubmit = handleSubmit((data) => {
    try {
      createSkill({
        ...data,
        description: data.description ?? '',
        features: data.features.map((item) => ({ id: item.item.id, percent: item.percent })),
      });
      successToast('Навык создан');
      onClose();
      mutate();
    } catch (e) {
      errorToast(getErrorMessage(e));
    }
  });

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
      <PercentageField
        name="features"
        options={(featureList ?? []).flatMap((item) => item.children)}
        label="Характеристика"
        labelType="feminine"
      />
    </DefaultDrawer>
  );
};

export default SkillForm;
