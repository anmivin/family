import { ListFormValues, ListFormSchema } from './CreateList.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import FormSection from '@ui/FormSection';
import { Box, Button, TextField, Tooltip } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
const CreateList = () => {
  const formMethods = useForm<ListFormValues>({
    resolver: yupResolver(ListFormSchema),
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'listItems',
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <>
      <FormSection title="Основная информация">
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Название"
              required
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => <TextField {...field} rows={4} variant="standard" label="Описание" />}
        />
      </FormSection>
      <FormSection title="Дата завершения">
        <Box display="flex" flexDirection="row" gap={2}>
          <DatePicker />
        </Box>
      </FormSection>
      <FormSection title="Элементы">
        {fields.map((item) => (
          <Box></Box>
        ))}
      </FormSection>
      <Button onClick={onSubmit}>Создать</Button>
    </>
  );
};

export default CreateList;
