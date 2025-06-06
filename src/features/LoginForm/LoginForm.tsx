import { TextField, Button, Box, Tooltip, InputAdornment, IconButton, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { LoginFormSchema, LoginFormValues } from './LoginForm.types';
import { signIn, signUp } from '@shared/helpers/fetcher';
import { useCallback, useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { useAppDispatch } from '@shared/stores/global.store';
import { fetchUserInfo } from '@shared/stores/users/users.fetchers';
import { getErrorMessage } from '@shared/helpers/utils';
import { EyeIcon, EyeClosedIcon } from '@shared/ui/Icons';
const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const path = useLocation();
  const dispatch = useAppDispatch();
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
      try {
        if (isSignUp) {
          await signUp(data);
        } else {
          await signIn(data);
        }
        dispatch(fetchUserInfo());
      } catch (e) {
        console.log(e);
        setError(getErrorMessage(e));
      }
    },
    [isSignUp]
  );

  return (
    <Box display="flex" flexDirection="column" gap={4} p={8} height="100vh" justifyContent="center">
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
            <Tooltip title="Необязательно, но мы тогда не сможем обновить забтый пароль">
              <TextField {...field} variant="standard" label="E-mail" />
            </Tooltip>
          )}
        />
      )}

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextField
            {...field}
            variant="standard"
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                      {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
      {isSignUp && (
        <Controller
          control={control}
          name="familyId"
          render={({ field }) => <TextField {...field} variant="standard" label="айди семьи" />}
        />
      )}
      {!!error && <Typography variant="caption">{error}</Typography>}
      <Box alignSelf="center">
        <Button onClick={() => setIsSignUp((prev) => !prev)}>{isSignUp ? 'вход' : 'регистрация'}</Button>
        <Button onClick={handleSubmit(onSubmit)}>{isSignUp ? 'зарегистрироваться' : 'войти'}</Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
