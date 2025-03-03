import DefaultDrawer from '@ui/Drawer';
import { useAppSelector, useAppDispatch } from '../../shared/stores/global.store';
import { setIsLoginFormOpen } from '../../shared/stores/modals.store';
import { TextField, Button, Box, Tooltip } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { LoginFormSchema, LoginFormValues } from './LoginForm.types';
import { signUp, signIn } from '@api/axiosInstance';
import { useCallback, useEffect, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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

  const onSubmit = useCallback(
    async (data: LoginFormValues) => {
      if (isSignUp) {
        const res = await signUp(data);
        console.log(res);
      } else {
        const res = await signIn(data);
        console.log(res);
      }
    },
    [isSignUp]
  );

  return (
    <Box display="flex" flexDirection="column" p={3}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <TextField {...field} variant="standard" label="Никнейм" />}
      />
      {isSignUp && (
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Tooltip title="Необязательно, но мы тогда не сможем обновить забтый пароль (">
              <TextField {...field} variant="standard" label="E-mail" />
            </Tooltip>
          )}
        />
      )}

      <Controller
        control={control}
        name="password"
        render={({ field }) => <TextField {...field} variant="standard" label="Пароль" />}
      />
      {isSignUp && (
        <Controller
          control={control}
          name="familyId"
          render={({ field }) => <TextField {...field} variant="standard" label="айди семьи" />}
        />
      )}

      <Button onClick={() => setIsSignUp((prev) => !prev)}>{isSignUp ? 'вход' : 'регистрация'}</Button>
      <Button onClick={handleSubmit(onSubmit)}>{isSignUp ? 'зарегистрироваться' : 'войти'}</Button>
    </Box>
  );
};

export default LoginForm;
