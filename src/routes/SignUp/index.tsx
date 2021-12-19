import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Link from '../../components/Link';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

import Logo from '../../assets/logo';

const SignUp: React.FC = () => {
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
            Sign Up
          </Typography>
        </Box>
        <Box>
          <Link type="secondary" href="/signin">
            Already have an account
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginBottom: '30px' }}>
        <TextField label="Define a username" />
      </Box>
      <Box sx={{ display: 'flex', marginBottom: '30px' }}>
        <TextField label="Set your password" />
      </Box>
      <Box sx={{ display: 'flex', marginBottom: '40px' }}>
        <TextField label="Email (optional)" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button variant="contained">Create account</Button>
      </Box>
    </Box>
  );
};

export default SignUp;
