import { TextField, Autocomplete, Button, Box, IconButton } from '@mui/material';
import { PlusIcon, CrossIcon } from '@ui/Icons';

import { useFieldArray, useFormContext, Controller } from 'react-hook-form';

import { PercentageFieldProps, ItemProps, getLabelType } from './PercentageField.types';
import { useEffect } from 'react';

const PercentageField = ({ name, options, label, labelType, enableCreateOption }: PercentageFieldProps) => {
  const {
    control,
    watch,
    setValue,
    reset,
    resetField,
    formState: { errors },
    trigger,
  } = useFormContext<{ [key: string]: ItemProps[] }>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  useEffect(() => console.log('errors', errors), [errors]);

  return (
    <>
      {fields.map((field, index) => (
        <Box key={`${name}-${field.id}`} display="flex" flexDirection="row" gap={1} width="100%">
          <Controller
            control={control}
            name={`${name}.${index}.item`}
            render={({ field }) => (
              <Autocomplete
                {...field}
                fullWidth
                onChange={(_, newValue) => field.onChange(newValue)}
                options={(options ?? []).concat(enableCreateOption ? [{ id: 'create', name: '' }] : [])}
                getOptionLabel={(option) => option.name ?? ''}
                renderInput={(params) => <TextField variant="standard" label={label} {...params} />}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderOption={(props, option, { selected }) => {
                  return option.id === 'create' ? (
                    <Button fullWidth onClick={() => {}}>
                      + Создать {label}
                    </Button>
                  ) : (
                    <li {...props} aria-selected={selected}>
                      {option.name}
                    </li>
                  );
                }}
              />
            )}
          />
          <Controller
            control={control}
            name={`${name}.${index}.percent`}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Доля"
                type="number"
                error={!!errors[name]}
                helperText={errors[name]?.root?.message}
              />
            )}
          />

          <IconButton onClick={() => remove(index)}>
            <CrossIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        startIcon={<PlusIcon />}
        fullWidth
        onClick={() =>
          append({
            item: undefined,
            percent: undefined,
          })
        }
      >
        {getLabelType(labelType)} {label.toLowerCase()}
      </Button>
    </>
  );
};

export default PercentageField;
