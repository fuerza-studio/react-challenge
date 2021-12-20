import React from 'react';
import { Box } from '@mui/material';

import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import JournalCard from '../../../components/JournalCard';

import Logo from '../../../assets/logo';

const AddJournal: React.FC = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '115px',
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '240px',
            marginBottom: '35px',
          }}
        >
          <JournalCard journalVariant="secondary" />
        </Box>
        <Box sx={{ width: '100%', maxWidth: '320px', marginBottom: '35px' }}>
          <TextField placeholder="Journal title" hiddenLabel />
        </Box>
        <Box sx={{ marginBottom: '42px' }}>
          <Button variant="contained">Save journal</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddJournal;
