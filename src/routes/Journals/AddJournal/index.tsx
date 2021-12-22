import React from 'react';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { useUser } from '../../../context/user';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import JournalCard from '../../../components/JournalCard';

import api from '../../../services/api';
import Logo from '../../../assets/logo';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  title: string;
}

const AddJournal: React.FC = () => {
  const navigate = useNavigate();
  const { getUserData } = useUser();

  const {
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const currentTitle = watch('title');
  const userData = getUserData();
  const userId = userData?.id || '';

  const onSubmit = async (data: FormValues) => {
    try {
      const payload: { title: string; userId: string } = {
        title: data.title,
        userId,
      };

      const response = await api.post('/journals', payload);

      if (!response) {
        throw new Error();
      }

      navigate('/journals');
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
    <form>
      <Box component="section">
        <Box
          sx={{
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '115px',
          }}
          onClick={() => navigate('/journals')}
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
            <JournalCard journalVariant="secondary" content={currentTitle} />
          </Box>
          <Box sx={{ width: '100%', maxWidth: '320px', marginBottom: '35px' }}>
            <FormField
              name="title"
              control={control}
              placeholder="Journal title"
              hiddenLabel
            />
          </Box>
          <Box sx={{ marginBottom: '42px' }}>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              {isSubmitting ? 'Loading' : 'Save journal'}
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default AddJournal;
