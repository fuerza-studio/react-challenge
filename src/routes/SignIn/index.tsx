import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Link from '../../components/Link';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

import Logo from '../../assets/logo';

const SignIn: React.FC = () => {
  return (
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
        <TextField label="Your username" />
      </Box>
      <Box sx={{ display: 'flex', marginBottom: '12px' }}>
        <TextField label="Your password" />
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
        <Button variant="contained">Log In</Button>
      </Box>
    </Box>
  );
};

export default SignIn;
