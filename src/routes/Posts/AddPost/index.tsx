import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Box, CircularProgress, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import api from '../../../services/api';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

import Logo from '../../../assets/logo';

const journalTitle = 'HTML';

interface FormValues {
  title: string;
  content: string;
}

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const { journalId } = useParams();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await api.post(`/journals/entry/${journalId}`, data);

      if (!response) {
        throw new Error();
      }

      navigate(`/journals/${journalId}/posts`);
    } catch (error) {
      toast.error('Bad request', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

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
        onClick={() => navigate(`/journals/${journalId}/posts`)}
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
          <FormField
            name="title"
            control={control}
            placeholder="Title"
            hiddenLabel
          />
        </Box>
        <Box sx={{ width: '100%', maxWidth: '500px', marginBottom: '35px' }}>
          <FormField
            name="content"
            control={control}
            placeholder="Write your note"
            hiddenLabel
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            {isSubmitting ? (
              <CircularProgress
                sx={{
                  color: '#FFF',
                  width: '23px !important',
                  height: '23px !important',
                }}
              />
            ) : (
              'Save note'
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPost;
