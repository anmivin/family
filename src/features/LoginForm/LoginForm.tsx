import DefaultDrawer from '@ui/Drawer';
import { useAppSelector, useAppDispatch } from '../../shared/store/global.store';
import { setIsLoginFormOpen } from '../../shared/store/modals.store';
import { TextField, Button, Box, Tooltip } from '@mui/material';

import { useLocation } from 'react-router-dom';
import { LoginFormSchema, LoginFormValues } from './LoginForm.types';

import { useEffect, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

const LoginForm = () => {
  const path = useLocation();
  const defaultVals = useMemo(() => {
    const splittedPath = path.pathname.split('/');
    return {
      name: undefined,
      email: undefined,
      password: undefined,
      familyId: splittedPath.length > 2 ? splittedPath[splittedPath.length - 1] : undefined,
    };
  }, [path]);

  const formMethods = useForm<LoginFormValues>({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: defaultVals,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => console.log(errors), [errors]);
  return (
    <Box display="flex" flexDirection="column" p={3}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <TextField {...field} variant="standard" label="Никнейм" />}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Tooltip title="Необязательно, но мы тогда не сможем обновить забтый пароль (">
            <TextField {...field} variant="standard" label="E-mail" />
          </Tooltip>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => <TextField {...field} variant="standard" label="Пароль" />}
      />
      <Controller
        control={control}
        name="familyId"
        render={({ field }) => <TextField {...field} variant="standard" label="айди семьи" />}
      />
      <Button onClick={onSubmit}>войти</Button>
    </Box>
  );
};

export default LoginForm;
