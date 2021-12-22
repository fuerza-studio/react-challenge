import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Box, CircularProgress, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import api from '../../../services/api';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

import Logo from '../../../assets/logo';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPostValidationSchema } from '../../../schemas/posts';
import { Journal } from '../../../interfaces/journal.interface';

interface FormValues {
  title: string;
  content: string;
}

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const { journalId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [journalTitle, setJournalTitle] = useState<string>('...');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    resolver: yupResolver(addPostValidationSchema),
  });

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

  useEffect(() => {
    const handleGetJournalData = async () => {
      try {
        const { journal }: { journal: Journal } = await api.get(
          `/journals/data/${journalId}`
        );

        if (!journal) {
          throw new Error();
        }

        setJournalTitle(journal.title);
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
      } finally {
        setIsLoading(false);
      }
    };

    if (journalId) {
      handleGetJournalData();
    }
  }, [journalId]);
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
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
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
              marginBottom: '13px',
            }}
          >
            <FormField
              name="title"
              control={control}
              placeholder="Title"
              hiddenLabel
              maxLength={30}
              error={errors.title || null}
            />
          </Box>
          <Box sx={{ width: '100%', maxWidth: '500px', marginBottom: '40px' }}>
            <FormField
              name="content"
              control={control}
              placeholder="Write your note"
              hiddenLabel
              multiline
              rows={20}
              error={errors.content || null}
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
      )}
    </Box>
  );
};

export default AddPost;
