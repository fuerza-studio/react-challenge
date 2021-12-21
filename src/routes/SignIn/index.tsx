import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useUser } from '../../context/user';
import Link from '../../components/Link';
import Button from '../../components/Button';
import FormField from '../../components/FormField';

import Logo from '../../assets/logo';

interface FormValues {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { login } = useUser();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => handleLogin(data);

  const handleLogin = async (data: FormValues): Promise<void> => login(data);

  return (
    <form>
      <Box component="section" sx={{ marginTop: '214px' }}>
        <Box sx={{ display: 'flex', marginBottom: '78px' }}>
          <Logo />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <Box>
            <Typography sx={{ fontSize: '32px', color: 'primary.main' }}>
              Sign In
            </Typography>
          </Box>
          <Box>
            <Link type="secondary" href="/signup">
              Sign Up
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginBottom: '30px' }}>
          <FormField name="username" control={control} label="Your username" />
        </Box>
        <Box sx={{ display: 'flex', marginBottom: '12px' }}>
          <FormField name="password" control={control} label="Your password" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '40px',
            justifyContent: 'flex-end',
          }}
        >
          <Link type="terciary" href="reset-password">
            Forgot Password?
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            {isSubmitting ? 'Loading' : 'Log In'}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
