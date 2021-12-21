import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Button from '../../../components/Button';
import TextField from '../../../components/TextField';

import Logo from '../../../assets/logo';

const journalTitle = 'HTML';

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box component="section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '45px',
        }}
        onClick={() => navigate('/journals/123123/posts')}
      >
        <ArrowBackIosIcon sx={{ marginRight: '20px' }} />
        <Typography>{journalTitle}</Typography>
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
            maxWidth: '500px',
            marginBottom: '28px',
          }}
        >
          <TextField placeholder="Title" hiddenLabel />
        </Box>
        <Box sx={{ width: '100%', maxWidth: '500px', marginBottom: '35px' }}>
          <TextField placeholder="Write your note" hiddenLabel />
        </Box>
        <Box>
          <Button variant="contained">Save note</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPost;
